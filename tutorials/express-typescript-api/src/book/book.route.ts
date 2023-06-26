import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";

import * as BookService from "./book.service";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const books = await BookService.getBooks();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const book = await BookService.getBook(id);

    if (!book) {
      return res.status(404).json({
        error: "Book not found",
      });
    }

    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post(
  "/",
  body("title").isString(),
  body("isFiction").isBoolean(),
  body("datePublished").isDate(),
  body("authorId").isInt(),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const book = await BookService.createBook(req.body);
      return res.status(201).json(book);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

router.put(
  "/:id",
  body("title").isString(),
  body("isFiction").isBoolean(),
  body("datePublished").isDate(),
  body("authorId").isInt(),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const id = parseInt(req.params.id, 10);
      const book = await BookService.updateBook(req.body, id);

      if (!book) {
        return res.status(404).json({
          error: "Book not found",
        });
      }

      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await BookService.deleteBook(id);

    return res.status(200).json();
  } catch (error) {
    return res.status(500).json(error);
  }
});
