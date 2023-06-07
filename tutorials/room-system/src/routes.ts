import { Router } from "express";
import { SubjectController } from "./controllers/SubjectController";
import { IndexController } from "./controllers/IndexController";
import RoomController from "./controllers/RoomController";

const routes = Router();

routes.get("/healthcheck", new IndexController().healthcheck);

routes.get("/subject", new SubjectController().list);
routes.post("/subject", new SubjectController().create);

routes.get("/room", new RoomController().list);
routes.post("/room", new RoomController().createRoom);
routes.post("/room/:idRoom/video", new RoomController().createVideo);
routes.post("/room/:idRoom/subject", new RoomController().roomSubject);

export default routes;
