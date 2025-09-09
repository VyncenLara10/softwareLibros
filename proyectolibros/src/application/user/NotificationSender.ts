import { UserDto } from "../../domain/user/UserDto";

export interface NotificationSender {
  send(user: UserDto): Promise<void>;
}
