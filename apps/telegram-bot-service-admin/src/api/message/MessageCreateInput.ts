import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  senderId?: string | null;
};
