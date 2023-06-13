import express from "express";
import PrismaLessonsRepository from "./repositories/prisma/PrismaLessonsRepository";
import { CreateLesson } from "./services/CreateLesson";

const app = express();

app.use(express.json());

app.post("/lessons", (req, res) => {
  const { title, description } = req.body;

  const prismaLessonsRepository = new PrismaLessonsRepository();
  const createLesson = new CreateLesson(prismaLessonsRepository);

  try {
    createLesson.execute({ title, description });
    return res.status(201).send();
  } catch (error: any) {
    return res.status(400).json({
      error: error.message,
    });
  }
});

export default app;
