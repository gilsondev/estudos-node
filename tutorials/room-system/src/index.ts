import express, { Application, Request, Response } from "express";
import { AppDataSource } from "./data-source";

const app: Application = express();

app.use(express.json());

app.get("/healthcheck", (req: Request, res: Response): void => {
  res.json({
    status: "OK",
  });
});

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT, async () => {
      console.log(`🚀 Server started on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database.", err);
    process.exit(1);
  });

export default app;
