import dotenv from "dotenv";

import express from "express";
import cors from "cors";
import { router as authorRouter } from "./author/author.route";
import { router as bookRouter } from "./book/book.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
