import { UserRepository } from "../../domain/user/UserRepository";
import { NotificationSender } from "./NotificationSender";

export class UserValidator {
  constructor(
    private readonly repository: UserRepository,
    private readonly sender: NotificationSender
  ) {}

  async run(id: string): Promise<boolean> {
    const user = await this.repository.findById(id);
    if (!user) return false;

    await this.sender.send(user.toPrimitives());
    return user.isValid.value;
  }
}
