import LessonsRepository from "../repositories/LessonsRepository";

interface CreateLessonRequest {
  title: string;
  description?: string;
}

export class CreateLesson {
  constructor(private repository: LessonsRepository) {}
  async execute({ title, description }: CreateLessonRequest) {
    if (!title) {
      throw new Error("Title is required");
    }

    await this.repository.create({ title, description });
  }
}
