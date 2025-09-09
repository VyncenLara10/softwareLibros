import { UserRepository } from "user/UserRepository";
import { User } from "/domain/user/User";
import { UserDto } from "/domain/user/UserDto";

export class UserCreator {
  constructor(private readonly repository: UserRepository) {}

  async run(dto: UserDto): Promise<void> {
    const user = User.create(dto);
    await this.repository.save(user);
  }
}
