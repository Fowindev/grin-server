"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
/**
 * Class decorator to create a Server class that handles middlewares and controllers
 * @param {ServerOptions} options Server Options
 * @returns {ClassDecorator} Class Decorator
 */
var Server = function (options) {
    return function (constructor) {
        var serverMetadata = Reflect.getOwnMetadata("grin:server", constructor);
        if (serverMetadata) {
            if (options.overwrite) {
                serverMetadata = undefined;
            }
            else {
                throw new Error("Server Class " + constructor.name + " is already a Server");
            }
        }
        serverMetadata = {
            controllers: options.controllers,
            middlewares: options.middlewares,
        };
        Reflect.defineMetadata("grin:server", serverMetadata, constructor);
    };
};
exports.Server = Server;
