import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONVERSATION_TITLE_FIELD } from "./ConversationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ConversationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Message"
          target="conversationId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <ReferenceField
              label="conversation"
              source="conversation.id"
              reference="Conversation"
            >
              <TextField source={CONVERSATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="senderId" source="senderId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="conversationId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <TextField label="chatContext" source="chatContext" />
            <ReferenceField
              label="conversation"
              source="conversation.id"
              reference="Conversation"
            >
              <TextField source={CONVERSATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
