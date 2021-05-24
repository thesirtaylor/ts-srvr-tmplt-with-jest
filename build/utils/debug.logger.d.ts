import { Request, Response } from "express";
import * as winston from "winston";
export declare const debugLogger: {
    transports: winston.transports.ConsoleTransportInstance[];
    format: winston.Logform.Format;
    meta: boolean;
    statusLevels: boolean;
    level: (req: Request, res: Response) => string;
};
