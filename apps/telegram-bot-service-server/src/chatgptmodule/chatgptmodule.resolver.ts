import * as graphql from "@nestjs/graphql";
import { ChatGptModuleService } from "./chatgptmodule.service";

export class ChatGptModuleResolver {
  constructor(protected readonly service: ChatGptModuleService) {}
}
