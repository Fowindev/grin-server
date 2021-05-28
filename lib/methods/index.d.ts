import express from "express";
import { ExpressMethods } from "../utils/methods";
interface RouteEntry {
    path: string;
    method: ExpressMethods;
    middlewares?: express.RequestHandler[];
    handler: express.RequestHandler;
}
interface RoutesMetadata {
    routes: RouteEntry[];
}
/**
 * Method decorator to create a Route
 * @param {ExpressMethods} method Express Method
 * @param {string} path Relative path
 * @returns {MethodDecorator} Method Decorator
 */
declare const Route: (method: ExpressMethods, path: string, middlewares?: express.RequestHandler[]) => MethodDecorator;
/**
 * Method decorator to create a global Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
declare const All: (path: string, middlewares?: express.RequestHandler[]) => MethodDecorator;
/**
 * Method decorator to create a Get Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
declare const Get: (path: string, middlewares?: express.RequestHandler[]) => MethodDecorator;
/**
 * Method decorator to create a Post Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
declare const Post: (path: string, middlewares?: express.RequestHandler[]) => MethodDecorator;
/**
 * Method decorator to create a Put Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
declare const Put: (path: string, middlewares?: express.RequestHandler[]) => MethodDecorator;
/**
 * Method decorator to create a Delete Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
declare const Delete: (path: string, middlewares?: express.RequestHandler[]) => MethodDecorator;
/**
 * Method decorator to create a Patch Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
declare const Patch: (path: string, middlewares?: express.RequestHandler[]) => MethodDecorator;
/**
 * Method decorator to create a Options Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
declare const Options: (path: string, middlewares?: express.RequestHandler[]) => MethodDecorator;
/**
 * Method decorator to create a Head Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
declare const Head: (path: string, middlewares?: express.RequestHandler[]) => MethodDecorator;
export type { RoutesMetadata, RouteEntry };
export { Route, All, Get, Post, Put, Delete, Patch, Options, Head };
