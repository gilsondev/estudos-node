import { app } from "../../app";
import request from "supertest";

describe("Create User Controller", () => {
  it("should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      name: "Test",
      username: "test",
      email: "test@mail.com",
    });

    expect(response.status).toBe(200);
  });
});
