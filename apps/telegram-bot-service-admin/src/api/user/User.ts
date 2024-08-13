import { Conversation } from "../conversation/Conversation";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type User = {
  conversations?: Array<Conversation>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  sessions?: Array<Session>;
  updatedAt: Date;
  username: string;
};
