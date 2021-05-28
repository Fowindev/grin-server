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
const Route = (
  method: ExpressMethods,
  path: string,
  middlewares: express.RequestHandler[] = []
): MethodDecorator => {
  return (target: Object, _, descriptor: PropertyDescriptor) => {
    let routesMetadata: RoutesMetadata | undefined = Reflect.getOwnMetadata(
      "grin:routes",
      target.constructor
    );

    if (!routesMetadata) {
      routesMetadata = {
        routes: [],
      };
    }

    routesMetadata.routes.push({
      path: path,
      method: method,
      middlewares: middlewares,
      handler: descriptor.value,
    });

    Reflect.defineMetadata("grin:routes", routesMetadata, target.constructor);
  };
};

/**
 * Method decorator to create a global Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
const All = (
  path: string,
  middlewares: express.RequestHandler[] = []
): MethodDecorator => Route("all", path, middlewares);

/**
 * Method decorator to create a Get Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
const Get = (
  path: string,
  middlewares: express.RequestHandler[] = []
): MethodDecorator => Route("get", path, middlewares);

/**
 * Method decorator to create a Post Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
const Post = (
  path: string,
  middlewares: express.RequestHandler[] = []
): MethodDecorator => Route("post", path, middlewares);

/**
 * Method decorator to create a Put Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
const Put = (
  path: string,
  middlewares: express.RequestHandler[] = []
): MethodDecorator => Route("put", path, middlewares);

/**
 * Method decorator to create a Delete Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
const Delete = (
  path: string,
  middlewares: express.RequestHandler[] = []
): MethodDecorator => Route("delete", path, middlewares);

/**
 * Method decorator to create a Patch Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
const Patch = (
  path: string,
  middlewares: express.RequestHandler[] = []
): MethodDecorator => Route("patch", path, middlewares);

/**
 * Method decorator to create a Options Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
const Options = (
  path: string,
  middlewares: express.RequestHandler[] = []
): MethodDecorator => Route("options", path, middlewares);

/**
 * Method decorator to create a Head Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
const Head = (
  path: string,
  middlewares: express.RequestHandler[] = []
): MethodDecorator => Route("head", path, middlewares);

export type { RoutesMetadata, RouteEntry };
export { Route, All, Get, Post, Put, Delete, Patch, Options, Head };
