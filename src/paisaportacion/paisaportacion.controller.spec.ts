import { Test, TestingModule } from '@nestjs/testing';
import { PaisaportacionController } from './paisaportacion.controller';

describe('PaisaportacionController', () => {
  let controller: PaisaportacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaisaportacionController],
    }).compile();

    controller = module.get<PaisaportacionController>(PaisaportacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
