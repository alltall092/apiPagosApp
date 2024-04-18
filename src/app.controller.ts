import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';
import { HfInference } from '@huggingface/inference';
const hf = new HfInference('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');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
