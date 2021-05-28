"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = exports.Options = exports.Patch = exports.Delete = exports.Put = exports.Post = exports.Get = exports.All = exports.Route = void 0;
/**
 * Method decorator to create a Route
 * @param {ExpressMethods} method Express Method
 * @param {string} path Relative path
 * @returns {MethodDecorator} Method Decorator
 */
var Route = function (method, path, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    return function (target, _, descriptor) {
        var routesMetadata = Reflect.getOwnMetadata("grin:routes", target.constructor);
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
exports.Route = Route;
/**
 * Method decorator to create a global Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
var All = function (path, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    return Route("all", path, middlewares);
};
exports.All = All;
/**
 * Method decorator to create a Get Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
var Get = function (path, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    return Route("get", path, middlewares);
};
exports.Get = Get;
/**
 * Method decorator to create a Post Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
var Post = function (path, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    return Route("post", path, middlewares);
};
exports.Post = Post;
/**
 * Method decorator to create a Put Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
var Put = function (path, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    return Route("put", path, middlewares);
};
exports.Put = Put;
/**
 * Method decorator to create a Delete Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
var Delete = function (path, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    return Route("delete", path, middlewares);
};
exports.Delete = Delete;
/**
 * Method decorator to create a Patch Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
var Patch = function (path, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    return Route("patch", path, middlewares);
};
exports.Patch = Patch;
/**
 * Method decorator to create a Options Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
var Options = function (path, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    return Route("options", path, middlewares);
};
exports.Options = Options;
/**
 * Method decorator to create a Head Route
 * @param {string} path Relative path
 * @returns {Method Decorator} Method Decorator
 */
var Head = function (path, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    return Route("head", path, middlewares);
};
exports.Head = Head;
