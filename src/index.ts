import "reflect-metadata";

import { build } from "./builder";
import {
  Controller,
  ControllerMetadata,
  ControllerOptions,
} from "./controller";
import {
  All,
  Delete,
  Get,
  Head,
  Options,
  Patch,
  Post,
  Put,
  Route,
  RouteEntry,
  RoutesMetadata,
} from "./methods";
import { Server, ServerMetadata } from "./server";

import { ExpressMethods } from "./utils/methods";

export { build };
export { Controller, ControllerMetadata, ControllerOptions };
export {
  All,
  Delete,
  Get,
  Head,
  Options,
  Patch,
  Post,
  Put,
  Route,
  RouteEntry,
  RoutesMetadata,
};
export { Server, ServerMetadata };

export { ExpressMethods };
