import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ChatGptModuleService } from "./chatgptmodule.service";

@swagger.ApiTags("chatGptModules")
@common.Controller("chatGptModules")
export class ChatGptModuleController {
  constructor(protected readonly service: ChatGptModuleService) {}
}
