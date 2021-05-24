"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var express_1 = __importDefault(require("express"));
var debug_logger_1 = require("./utils/debug.logger");
var debug_1 = __importDefault(require("debug"));
var index_1 = require("./routes/index");
var expressWinston = __importStar(require("express-winston"));
var app = express_1.default();
var port = 3000;
var debugLog = debug_1.default("");
index_1.routes.forEach(function (route) {
    var method = route.method, path = route.path, middleware = route.middleware, handler = route.handler;
    app[method].apply(app, __spreadArray(__spreadArray([path], middleware), [handler]));
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(expressWinston.errorLogger(debug_logger_1.debugLogger));
app.get("/", function (req, res) { return res.send("Express + Typescript server"); });
app.listen(port, function () { return console.log("app running on port " + port); });
