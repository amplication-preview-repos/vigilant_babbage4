import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  chatContext?: SortOrder;
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
