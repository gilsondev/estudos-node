import { Router } from "express";
import { createUserFactory } from "../modules/createUser/CreateUserFactory";

export const routes = Router();

routes.post("/users", (request, response) =>
  createUserFactory().handle(request, response)
);
