import { Message } from "../message/Message";
import { Session } from "../session/Session";
import { User } from "../user/User";

export type Conversation = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  sessions?: Array<Session>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
