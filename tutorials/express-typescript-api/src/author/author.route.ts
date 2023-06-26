import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";

import * as AuthorService from "./author.service";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const authors = await AuthorService.listAuthor();
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const author = await AuthorService.getAuthor(id);

    if (!author) {
      return res.status(404).json({
        error: "Author not found",
      });
    }

    return res.status(200).json(author);
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

router.post(
  "/",
  body("firstName").isString(),
  body("lastName").isString(),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const author = await AuthorService.createAuthor(req.body);
      return res.status(201).json(author);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

router.put(
  "/:id",
  body("firstName").isString(),
  body("lastName").isString(),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const id = parseInt(req.params.id, 10);
      const author = await AuthorService.updateAuthor(req.body, id);

      if (!author) {
        return res.status(404).json({
          error: "Author not found",
        });
      }

      return res.status(200).json(author);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await AuthorService.deleteAuthor(id);

    return res
      .status(200)
      .json({ message: "Author has been deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
});
