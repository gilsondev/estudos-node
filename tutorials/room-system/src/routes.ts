import { Router } from "express";
import { SubjectController } from "./controllers/SubjectController";
import { IndexController } from "./controllers/IndexController";
import RoomController from "./controllers/RoomController";

const routes = Router();

routes.get("/healthcheck", new IndexController().healthcheck);

routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomController().createRoom);
routes.post("/room/:idRoom/create", new RoomController().createVideo);

export default routes;
