import { Lesson } from "@prisma/client";
import crypto from "crypto";
import LessonsRepository, {
  CreateLessonData,
} from "../../src/repositories/LessonsRepository";

export default class InMemoryLessonsRepository implements LessonsRepository {
  // Better is to use an Entity class
  public items: Lesson[] = [];

  create(data: CreateLessonData): Promise<void> {
    this.items.push({
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description ?? null,
    });
  }
}
