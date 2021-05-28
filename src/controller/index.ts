import express from 'express';

import { RouteEntry, RoutesMetadata } from "../methods";

interface ControllerMetadata {
  basePath?: string;
  middlewares?: express.RequestHandler[];
  routes: RouteEntry[];
}

interface ControllerOptions {
  middlewares?: express.RequestHandler[];
  overwrite?: boolean;
}

/**
 * Class decorator to create a Controller class that handles Routes
 * @param {string=} basePath Base path
 * @param {ControllerOptions=} options Controller Options
 * @returns {ClassDecorator} Class Decorator
 */
const Controller = (
  basePath?: string,
  options?: ControllerOptions
): ClassDecorator => {
  return <T extends Function>(constructor: T) => {
    let controllerMetadata:
      | ControllerMetadata
      | undefined = Reflect.getOwnMetadata("grin:controller", constructor);
    let routesMetadata: RoutesMetadata | undefined = Reflect.getOwnMetadata(
      "grin:routes",
      constructor
    );

    if (controllerMetadata) {
      if (options?.overwrite) {
        controllerMetadata = undefined;
      } else {
        throw new Error(
          `Controller Class ${constructor.name} is already a Controller`
        );
      }
    }

    controllerMetadata = {
      basePath: basePath,
      middlewares: options?.middlewares,
      routes: routesMetadata?.routes || [],
    };

    Reflect.defineMetadata("grin:controller", controllerMetadata, constructor);
  };
};

export type { ControllerMetadata, ControllerOptions };
export { Controller };
