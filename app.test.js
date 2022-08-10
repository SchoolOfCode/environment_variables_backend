import request from "supertest";
import { jest } from "@jest/globals";
// import supertest from "supertest";

import app from "./app.js";

jest.setTimeout(10000);

//Test joinclean routes GET, POST, PUT, DELETE
describe("Tests for /joinclean route", () => {
  describe("Tests for GET /joinclean", () => {
    test("GET /joinclean returns 200 status code", async () => {
      let res = await request(app).get("/joinclean");
      expect(res.statusCode).toEqual(200);
    });

    test("GET /joinclean returns json content", async () => {
      let res = await request(app).get("/joinclean");
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    test("GET /joinclean returns an object", async () => {
      let res = await request(app).get("/joinclean");
      expect(res._body).toEqual(
        expect.objectContaining({
          success: true,
          payload: expect.any(Array),
        })
      );
    });
  });

  describe("Tests for POST /joinclean", () => {
    test("POST /joinclean returns a 200 status code", async () => {
      const res = await request(app).post("/joinclean").send({
        name: "Any name",
        comments: "A comment",
      });
      expect(res.statusCode).toEqual(200);
    });
    test("POST /joinclean method is POST", async () => {
      const res = await request(app).post("/joinclean").send({
        name: "Any name",
        comments: "A comment",
      });
      expect(res.req.method).toEqual("POST");
    });
    test("POST /joinclean method is to /joinclean", async () => {
      const res = await request(app).post("/joinclean").send({
        name: "Any name",
        comments: "A comment",
      });
      expect(res.req.path).toEqual("/joinclean");
    });
  });

  // console.log("this is the raw headers ", res.req);
  // expect(res.req.method).toEqual("POST");
  // expect(res.req.path).toEqual("/joinclean");
  // expect(res.rawHeaders).toEqual(
  //   expect.arrayContaining(expect.stringContaining("json"))
  // );
  // expect(res._data).toEqual(
  //   objectContaining({ name: "Any name", comments: "A comment" })
  // );
  describe("Tests for PUT /joinclean", () => {
    test("PUT /joinclean returns a 200 status code", async () => {
      const res = await request(app).put("/joinclean/1").send({
        name: "Any name",
        comments: "A comment",
      });
      //console.log(res.body.payload)
      expect(res.statusCode).toEqual(200);
    });
  });
  describe("Tests for DELETE /joinclean", () => {
    test("DELETE /joinclean returns the correct status code", async () => {
      const res = await request(app).delete("/joinclean/1");
      expect(res.statusCode).toEqual(200);
    });
  });
});

// can write tests for GET, POST, PUT
describe("Tests for /logclean route", () => {
  describe("Tests for GET /logclean ", () => {
    test("GET /logclean returns a 200 status code", async () => {
      let res = await request(app).get("/logclean");
      expect(res.statusCode).toEqual(200);
    });
    test("GET /logclean returns json content", async () => {
      let res = await request(app).get("/logclean");
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    test("GET /logclean returns an object", async () => {
      let res = await request(app).get("/logclean");
      expect(res._body).toEqual(
        expect.objectContaining({
          success: true,
          payload: expect.any(Array),
        })
      );
    });
  });
  describe("Tests for POST /logclean ", () => {
    test("POST /logclean returns a 200 status code", async () => {
      const res = await request(app).post("/logclean").send({
        cleanname: "Test Clean",
        bags: 1,
        volunteers: 1,
      });
      expect(res.statusCode).toEqual(200);
    });
  });
  describe("Tests for PUT /logclean ", () => {
    test("PUT /logclean returns a 200 status code", async () => {
      const res = await request(app).put("/logclean/1").send({
        cleanname: "Updated Test Clean",
        bags: 2,
        volunteers: 2,
      });
      expect(res.statusCode).toEqual(200);
    });
  });
});

//can write tests for GET, POST
describe("Tests for /startclean route", () => {
  describe("Tests for GET /logclean ", () => {
    test("GET /startclean returns 200 status code", async () => {
      let res = await request(app).get("/startclean");

      expect(res.statusCode).toEqual(200);
    });
    test("GET /startclean returns json content", async () => {
      let res = await request(app).get("/startclean");
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    test("GET /startclean returns an object", async () => {
      let res = await request(app).get("/startclean");
      expect(res._body).toEqual(
        expect.objectContaining({
          success: true,
          payload: expect.any(Array),
        })
      );
    });
  });
  describe("Tests for POST /logclean ", () => {
    test("POST /startclean returns a 200 status code and confirmation of an object being posted", async () => {
      const res = await request(app).post("/startclean").send({
        cleanName: "New Clean Name",
        location: "Some Location",
        date: "22.09.22",
        startTime: "12:00",
        endTime: "13:00",
        host: "Some Hose",
        notes: "A Note",
        latitude: 50.821781,
        longitude: -0.143573,
      });
      expect(res.statusCode).toEqual(200);
    });
  });
});
