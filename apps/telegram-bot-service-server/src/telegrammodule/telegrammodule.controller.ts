import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TelegramModuleService } from "./telegrammodule.service";

@swagger.ApiTags("telegramModules")
@common.Controller("telegramModules")
export class TelegramModuleController {
  constructor(protected readonly service: TelegramModuleService) {}
}
