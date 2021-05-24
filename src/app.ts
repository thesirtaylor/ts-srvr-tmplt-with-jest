import * as dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import { debugLogger } from "./utils/debug.logger";
import debug from "debug";
import { routes } from "./routes/index";
import { Route } from "./types/routes";
import * as expressWinston from "express-winston";

const app: Application = express();
const port = 3000;
const debugLog: debug.IDebugger = debug("");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressWinston.errorLogger(debugLogger));

routes.forEach((route) => {
  const { method, path, middleware, handler }: Route = route;

  app[method](path, ...middleware, handler);
});

app.get("/", (req, res) => res.send("Express + Typescript server"));
app.listen(port, () => console.log(`app running on port ${port}`));
