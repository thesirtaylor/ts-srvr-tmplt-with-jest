import * as dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import { debugLogger } from "./utils/debug.logger";
import debug from "debug";
import { routes } from "./routes/index";
import { Route } from "./types/routes";
import * as expressWinston from "express-winston";

const app: Application = express();
const debugLog: debug.IDebugger = debug("");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressWinston.errorLogger(debugLogger));

routes.forEach((route) => {
  const { method, path, middleware, handler }: Route = route;

  app[method](path, ...middleware, handler);
});

export = app;
