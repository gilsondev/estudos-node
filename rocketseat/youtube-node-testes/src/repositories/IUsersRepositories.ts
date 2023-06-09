import { User } from "../entities/User";

export interface IUsersRepository {
  exists(username: string): Promise<boolean>;
  create(user: User): Promise<User>;
}
