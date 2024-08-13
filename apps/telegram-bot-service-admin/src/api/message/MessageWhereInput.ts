import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  senderId?: StringNullableFilter;
};
