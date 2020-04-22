import app from "../app";
import request from "supertest";
describe("GET basic", () => {
  it("Hello API Request", async () => {
    const result = await request(app).get("/");
    expect(result.text).toEqual("Hello");
    expect(result.status).toEqual(200);
  });
});
