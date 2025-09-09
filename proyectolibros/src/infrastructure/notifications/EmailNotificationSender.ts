import { NotificationSender } from "../../application/user/NotificationSender";
import { UserDto } from "../../domain/user/UserDto";

export class EmailNotificationSender implements NotificationSender {
  async send(user: UserDto): Promise<void> {
    console.log(`Sending email to ${user.email}`);
  }
}
