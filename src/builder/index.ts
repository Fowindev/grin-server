import express from "express";

import { ControllerMetadata } from "../controller";
import { RouteEntry } from "../methods";
import { ServerMetadata } from "../server";

/**
 * Build Server into express Application
 * @param {Object} server Server
 * @returns {express.Application} Express Application
 */
const build = (
  server: Object,
  app?: express.Application
): express.Application => {
  let serverMetadata: ServerMetadata | undefined = Reflect.getOwnMetadata(
    "grin:server",
    server
  );

  if (serverMetadata) {
    let expressApp = app || express();

    serverMetadata.middlewares?.map((middleware: express.RequestHandler) => {
      expressApp.use(middleware);
    });

    serverMetadata.controllers?.map((controller: Object) => {
      let controllerMetadata:
        | ControllerMetadata
        | undefined = Reflect.getOwnMetadata("grin:controller", controller);

      if (controllerMetadata) {
        let router = express.Router();

        controllerMetadata.middlewares?.map((middleware: express.RequestHandler) => {
          router.use(middleware);
        });

        controllerMetadata.routes.map((route: RouteEntry) => {
          router[route.method](
            route.path,
            ...(route.middlewares || []),
            route.handler
          );
        });

        if (controllerMetadata.basePath) {
          expressApp.use(controllerMetadata.basePath, router);
        } else {
          expressApp.use(router);
        }
      } else {
        throw new Error(
          `Controller Class ${server.constructor.name} is not valid`
        );
      }
    });

    return expressApp;
  } else {
    throw new Error(`Server Class ${server.constructor.name} is not valid`);
  }
};

export { build };
