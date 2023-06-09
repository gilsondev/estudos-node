import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

interface IUserRequest {
  name: string;
  username: string;
  email: string;
}

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, username, email }: IUserRequest) {
    const userAlreadyExists = await this.usersRepository.exists(username);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const userCreate = User.create({
      name,
      username,
      email,
    });
    const user = await this.usersRepository.create(userCreate);
    return user;
  }
}
