import request from "supertest";
import { jest } from "@jest/globals";
// import supertest from "supertest";

import app from "./app.js";

jest.setTimeout(10000);

//Test joinclean routes GET, POST, PUT, DELETE
describe("Tests for /joinclean route", () => {
  test("GET /joinclean", async () => {
    let res = await request(app).get("/joinclean");
    expect(res.statusCode).toEqual(200);
    // console.log(res._body);
  });
});

describe("Test for create joinclean ", () => {
  test('POST /joinclean', async () => {
      const res = await request(app)
        .post('/joinclean')
        .send({
              "name":"Any name",
              "comments":"A comment"
             });
      expect(res.statusCode).toEqual(200);
  });
})

describe("Test for delete from joinclean", () => {
  test('DELETE /joinclean', async () => {
      const res = await request(app).delete('/joinclean/1');
      expect(res.statusCode).toEqual(200);
    });
  });

describe("Tesrt for update joinclean", () => {
    it('PUT /joinclean', async () => {
        const res = await request(app)
          .put('/joinclean/1')
          .send({
                "name":"Any name",
                "comments":"A comment"
               });
        //console.log(res.body.payload)
        expect(res.statusCode).toEqual(200);
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
