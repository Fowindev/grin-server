"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
/**
 * Class decorator to create a Controller class that handles Routes
 * @param {string=} basePath Base path
 * @param {ControllerOptions=} options Controller Options
 * @returns {ClassDecorator} Class Decorator
 */
var Controller = function (basePath, options) {
    return function (constructor) {
        var controllerMetadata = Reflect.getOwnMetadata("grin:controller", constructor);
        var routesMetadata = Reflect.getOwnMetadata("grin:routes", constructor);
        if (controllerMetadata) {
            if (options === null || options === void 0 ? void 0 : options.overwrite) {
                controllerMetadata = undefined;
            }
            else {
                throw new Error("Controller Class " + constructor.name + " is already a Controller");
            }
        }
        controllerMetadata = {
            basePath: basePath,
            middlewares: options === null || options === void 0 ? void 0 : options.middlewares,
            routes: (routesMetadata === null || routesMetadata === void 0 ? void 0 : routesMetadata.routes) || [],
        };
        Reflect.defineMetadata("grin:controller", controllerMetadata, constructor);
    };
};
exports.Controller = Controller;
