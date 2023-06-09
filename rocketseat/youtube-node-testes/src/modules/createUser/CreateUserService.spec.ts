import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "./CreateUserService";

let usersRepository: IUsersRepository;
let createUserService: CreateUserService;

describe("Create user", () => {
  beforeAll(() => {
    usersRepository = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(usersRepository);
  });

  it("should be able to create a new user", async () => {
    const user = await createUserService.execute({
      name: "Test",
      username: "test",
      email: "test@mail.com",
    });

    expect(user).toHaveProperty("id");
    expect(user.username).toBe("test");
    expect(user.email).toBe("test@mail.com");
  });

  it("should not be able to create an existing user", async () => {
    const existingUser: User = {
      name: "Test",
      username: "test",
      email: "test@mail.com",
    };

    await expect(createUserService.execute(existingUser)).rejects.toEqual(
      new Error("User already exists!")
    );
  });
});
