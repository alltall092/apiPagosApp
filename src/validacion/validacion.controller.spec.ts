import { Test, TestingModule } from '@nestjs/testing';
import { ValidacionController } from './validacion.controller';

describe('ValidacionController', () => {
  let controller: ValidacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidacionController],
    }).compile();

    controller = module.get<ValidacionController>(ValidacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
