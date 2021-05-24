import { RequestHandler as Middleware } from "express";
import { Handler } from "./handler";

type Method =
  | "get"
  | "head"
  | "post"
  | "put"
  | "delete"
  | "connect"
  | "trace"
  | "options"
  | "patch";

export type Route = {
  method: Method;
  path: string,
  middleware: Middleware[];
  handler: Handler
}