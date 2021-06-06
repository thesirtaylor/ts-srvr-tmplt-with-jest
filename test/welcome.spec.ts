import app from "../src/server";
import supertest from "supertest";
import { Server } from "http";

const request = supertest(app);
const port = 3001;

describe("Test for endpoints", () => {
  let server: Server;
  beforeAll(() => {
    server = app.listen(port, () => console.log(`app running on port ${port}`));
  });
  afterAll(() => {
    server.close();
  });

  it("gets test endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});
