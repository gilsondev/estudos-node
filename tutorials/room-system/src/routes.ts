import { Router } from "express";
import { SubjectController } from "./controllers/SubjectController";
import { IndexController } from "./controllers/IndexController";

const routes = Router();

routes.get("/healthcheck", new IndexController().healthcheck);

routes.post("/subject", new SubjectController().create);

export default routes;
