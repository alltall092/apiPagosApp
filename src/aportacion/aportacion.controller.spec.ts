import { Test, TestingModule } from '@nestjs/testing';
import { AportacionController } from './aportacion.controller';

describe('AportacionController', () => {
  let controller: AportacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AportacionController],
    }).compile();

    controller = module.get<AportacionController>(AportacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
