import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handle(req: Request, res: Response) {
    const { email, username, name } = req.body;
    const user = await this.createUser.execute({ email, username, name });

    return res.json(user);
  }
}
