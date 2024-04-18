import { Test, TestingModule } from '@nestjs/testing';
import { RegistroTokenController } from './registro-token.controller';

describe('RegistroTokenController', () => {
  let controller: RegistroTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroTokenController],
    }).compile();

    controller = module.get<RegistroTokenController>(RegistroTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
