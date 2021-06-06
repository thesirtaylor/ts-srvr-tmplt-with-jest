import { Route } from "../types/routes";
import { Wel } from "../controllers/welcome.controller";
export const pageRoutes: Route[] = [
  {
    method: "get",
    path: "/",
    middleware: [],
    handler: Wel 
  }
];
