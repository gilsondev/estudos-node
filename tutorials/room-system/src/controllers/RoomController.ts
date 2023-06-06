import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { videoRepository } from "../repositories/videoRepository";
import { subjectRepository } from "../repositories/subjectRepository";

export default class RoomController {
  async createRoom(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      if (!name) {
        return res.status(400).json({
          message: "Name is required",
        });
      }

      if (!description) {
        return res.status(400).json({
          message: "Description is required",
        });
      }

      const newRoom = roomRepository.create({ name, description });
      await roomRepository.save(newRoom);

      return res.status(201).json(newRoom);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }

  async createVideo(req: Request, res: Response) {
    const { title, url } = req.body;
    const { idRoom } = req.params;

    try {
      if (!title) {
        return res.status(400).json({
          message: "Title is required",
        });
      }

      if (!url) {
        return res.status(400).json({
          message: "Url is required",
        });
      }

      const room = await roomRepository.findOneBy({ id: Number(idRoom) });

      if (!room) {
        return res.status(404).json({
          message: "Room not found",
        });
      }

      const newVideo = videoRepository.create({ title, url, room });
      await videoRepository.save(newVideo);

      return res.status(201).json(newVideo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  async roomSubject(req: Request, res: Response) {
    const { subject_id } = req.body;
    const { idRoom } = req.params;

    try {
      if (!subject_id) {
        return res.status(400).json({
          message: "Subject is required",
        });
      }

      const subject = await subjectRepository.findOneBy({
        id: Number(subject_id),
      });
      const room = await roomRepository.findOneBy({ id: Number(idRoom) });

      if (!subject) {
        return res.status(404).json({
          message: "Subject not found",
        });
      }

      if (!room) {
        return res.status(404).json({
          message: "Room not found",
        });
      }

      await roomRepository.update(
        { id: Number(idRoom) },
        {
          subjects: [...room.subjects, subject],
        }
      );

      return res.status(200).json(room);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}
