import "dotenv/config";
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  request,
} from "express";
import { routes } from "./routes/routes";

const app: Application = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err}`,
  });
});

export { app };
