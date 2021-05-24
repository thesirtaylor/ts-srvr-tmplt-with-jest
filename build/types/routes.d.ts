import { RequestHandler as Middleware } from "express";
import { Handler } from "./handler";
declare type Method = "get" | "head" | "post" | "put" | "delete" | "connect" | "trace" | "options" | "patch";
export declare type Route = {
    method: Method;
    path: string;
    middleware: Middleware[];
    handler: Handler;
};
export {};
