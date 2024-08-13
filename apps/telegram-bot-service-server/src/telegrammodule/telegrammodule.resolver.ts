import * as graphql from "@nestjs/graphql";
import { TelegramModuleService } from "./telegrammodule.service";

export class TelegramModuleResolver {
  constructor(protected readonly service: TelegramModuleService) {}
}
