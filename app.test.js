import request from "supertest";
import { jest } from "@jest/globals";
import supertest from "supertest";

import app from "./app.js";

jest.setTimeout(7000);

describe("GET /joinclean", () => {
  test("gives us back 200", async () => {
    await request(app).get("/joinclean");
  });
});
