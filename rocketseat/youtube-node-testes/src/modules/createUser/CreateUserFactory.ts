import { UsersRepositoryPrisma } from "../../repositories/prisma/UsersRepositoryPrisma";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

export const createUserFactory = () => {
  const userRepository = new UsersRepositoryPrisma();
  const createUser = new CreateUserService(userRepository);
  const createUserController = new CreateUserController(createUser);

  return createUserController;
};
