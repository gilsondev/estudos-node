export interface CreateLessonData {
  title: string;
  description?: string;
}

export default interface LessonsRepository {
  create(data: CreateLessonData): Promise<void>;
}
