import request from "supertest";
import app from ".";

describe("Room API", () => {
  it("healthcheck should return OK", async () => {
    const response = await request(app).get("/healthcheck");
    expect(response.body).toEqual({
      status: "OK",
    });
  });
});
