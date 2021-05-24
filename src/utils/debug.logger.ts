import { Request, Response } from "express";
import * as winston from "winston";

export const debugLogger = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
    winston.format.simple()
  ),
  meta: false,
  statusLevels: false, // default value
  level: function (req: Request, res: Response): string {
    let level = "";
    if (res.statusCode >= 100) {
      level = "info";
    }
    if (res.statusCode >= 400) {
      level = "warn";
    }
    if (res.statusCode >= 500) {
      level = "error";
    }
    if (res.statusCode == 401 || res.statusCode == 403) {
      level = "error";
    }
    return level;
  },
};
