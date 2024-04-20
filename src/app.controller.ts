import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';
import { HfInference } from '@huggingface/inference';
import { ApiTags } from '@nestjs/swagger';
const hf = new HfInference('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');
@ApiTags('Bienvenido')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
