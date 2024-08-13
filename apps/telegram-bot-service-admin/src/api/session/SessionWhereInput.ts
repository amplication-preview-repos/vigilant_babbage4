import { JsonFilter } from "../../util/JsonFilter";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  chatContext?: JsonFilter;
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
