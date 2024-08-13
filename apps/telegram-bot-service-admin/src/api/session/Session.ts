import { JsonValue } from "type-fest";
import { Conversation } from "../conversation/Conversation";
import { User } from "../user/User";

export type Session = {
  chatContext: JsonValue;
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
