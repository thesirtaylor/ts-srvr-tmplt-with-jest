declare namespace Express {
  interface Request {
    authToken?: string;
    authId?: string;
  }
}
