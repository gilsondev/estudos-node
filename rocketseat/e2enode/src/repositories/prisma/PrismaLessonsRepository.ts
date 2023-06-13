import { prisma } from "../../prisma";
import LessonsRepository, { CreateLessonData } from "../LessonsRepository";

export default class PrismaLessonsRepository implements LessonsRepository {
  async create(data: CreateLessonData): Promise<void> {
    await prisma.lesson.create({
      data,
    });
  }
}
