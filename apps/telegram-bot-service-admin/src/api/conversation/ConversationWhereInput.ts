import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  sessions?: SessionListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
