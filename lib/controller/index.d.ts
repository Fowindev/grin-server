import express from 'express';
import { RouteEntry } from "../methods";
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
declare const Controller: (basePath?: string | undefined, options?: ControllerOptions | undefined) => ClassDecorator;
export type { ControllerMetadata, ControllerOptions };
export { Controller };
