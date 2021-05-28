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
declare const Server: (options: ServerOptions) => ClassDecorator;
export type { ServerMetadata };
export { Server };
