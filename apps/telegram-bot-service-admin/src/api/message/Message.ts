import { Conversation } from "../conversation/Conversation";

export type Message = {
  content: string | null;
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  senderId: string | null;
  updatedAt: Date;
};
