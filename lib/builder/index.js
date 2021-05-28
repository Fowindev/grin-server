"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
var express_1 = __importDefault(require("express"));
/**
 * Build Server into express Application
 * @param {Object} server Server
 * @returns {express.Application} Express Application
 */
var build = function (server, app) {
    var _a, _b;
    var serverMetadata = Reflect.getOwnMetadata("grin:server", server);
    if (serverMetadata) {
        var expressApp_1 = app || express_1.default();
        (_a = serverMetadata.middlewares) === null || _a === void 0 ? void 0 : _a.map(function (middleware) {
            expressApp_1.use(middleware);
        });
        (_b = serverMetadata.controllers) === null || _b === void 0 ? void 0 : _b.map(function (controller) {
            var _a;
            var controllerMetadata = Reflect.getOwnMetadata("grin:controller", controller);
            if (controllerMetadata) {
                var router_1 = express_1.default.Router();
                (_a = controllerMetadata.middlewares) === null || _a === void 0 ? void 0 : _a.map(function (middleware) {
                    router_1.use(middleware);
                });
                controllerMetadata.routes.map(function (route) {
                    router_1[route.method].apply(router_1, __spreadArrays([route.path], (route.middlewares || []), [route.handler]));
                });
                if (controllerMetadata.basePath) {
                    expressApp_1.use(controllerMetadata.basePath, router_1);
                }
                else {
                    expressApp_1.use(router_1);
                }
            }
            else {
                throw new Error("Controller Class " + server.constructor.name + " is not valid");
            }
        });
        return expressApp_1;
    }
    else {
        throw new Error("Server Class " + server.constructor.name + " is not valid");
    }
};
exports.build = build;
