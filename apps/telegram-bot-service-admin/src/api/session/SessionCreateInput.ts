import { InputJsonValue } from "../../types";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  chatContext?: InputJsonValue;
  conversation?: ConversationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
