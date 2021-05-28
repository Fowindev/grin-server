import express from "express";

interface ServerMetadata {
  controllers?: Object[];
  middlewares?: express.RequestHandler[];
}

interface ServerOptions extends ServerMetadata {
  overwrite?: boolean;
}

/**
 * Class decorator to create a Server class that handles middlewares and controllers
 * @param {ServerOptions} options Server Options
 * @returns {ClassDecorator} Class Decorator
 */
const Server = (options: ServerOptions): ClassDecorator => {
  return <T extends Function>(constructor: T) => {
    let serverMetadata: ServerMetadata | undefined = Reflect.getOwnMetadata(
      "grin:server",
      constructor
    );

    if (serverMetadata) {
      if (options.overwrite) {
        serverMetadata = undefined;
      } else {
        throw new Error(`Server Class ${constructor.name} is already a Server`);
      }
    }

    serverMetadata = {
      controllers: options.controllers,
      middlewares: options.middlewares,
    };

    Reflect.defineMetadata("grin:server", serverMetadata, constructor);
  };
};

export type { ServerMetadata };
export { Server };
