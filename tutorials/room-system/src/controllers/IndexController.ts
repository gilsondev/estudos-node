import { Request, Response } from "express";

export class IndexController {
  async healthcheck(req: Request, res: Response) {
    res.json({
      status: "OK",
    });
  }
}
