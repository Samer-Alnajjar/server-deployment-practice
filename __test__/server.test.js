"use strict"

const { it, expect } = require("@jest/globals");
// const { test, expect } = require("@jest/globals")

// test("add 1 + 2 equal 3", () => {
//   expect(1 + 2).toBe(3);
// })

// Importing packages and files
const supertest = require("supertest");
const server = require("../server.js");

const request = supertest(server.app);

describe("Server is running", () => {
  it("handle invalid routes", async() => {
    const response = await request.get("/boo");
    expect(response.status).toEqual(404);
  });
  it("handle server error", async() => {
    const response = await request.get("/bad");
    expect(response.status).toEqual(500);
  });
  it("handle working routes", async() => {
    const response = await request.get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Hello World");
  });
})