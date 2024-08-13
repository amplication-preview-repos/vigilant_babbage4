import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";
import { SessionCreateNestedManyWithoutConversationsInput } from "./SessionCreateNestedManyWithoutConversationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationCreateInput = {
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  sessions?: SessionCreateNestedManyWithoutConversationsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
