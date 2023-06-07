import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

export class SubjectController {
  async list(req: Request, res: Response) {
    try {
      const subjects = await subjectRepository.find();
      return res.json(subjects);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
  async create(req: Request, res: Response) {
    const { name } = req.body;

    try {
      if (!name) {
        return res.status(400).json({
          message: "Name is required",
        });
      }

      const newSubject = subjectRepository.create({
        name,
      });

      await subjectRepository.save(newSubject);

      return res.status(201).json({
        message: "Subject created successfully",
        subject: newSubject,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }
}
