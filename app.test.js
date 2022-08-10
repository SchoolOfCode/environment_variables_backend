import request from "supertest";
import { jest } from "@jest/globals";
// import supertest from "supertest";

import app from "./app.js";

jest.setTimeout(10000);


//can write tests for GET, POST, PUT, DELETE
describe("Tests for /joinclean route", () => {
  test("GET /joinclean", async () => {
    let res = await request(app).get("/joinclean");
    expect(res.statusCode).toEqual(200);
    // console.log(res._body);
  });
});

//can write tests for GET, POST, PUT
describe("Tests for /logclean route", () => {
  test("GET /logclean", async () => {
    let res = await request(app).get("/logclean");
    expect(res.statusCode).toEqual(200);
    // console.log(res._body);
  });
});

//can write tests for GET, POST
describe("Tests for /startclean route", () => {
  test("GET /logclean", async () => {
    let res = await request(app).get("/logclean");
    expect(res.statusCode).toEqual(200);
    console.log(res);

  });
});
