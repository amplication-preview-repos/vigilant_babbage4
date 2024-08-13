import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";
import { SessionUpdateManyWithoutConversationsInput } from "./SessionUpdateManyWithoutConversationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationUpdateInput = {
  messages?: MessageUpdateManyWithoutConversationsInput;
  sessions?: SessionUpdateManyWithoutConversationsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
