import { Test, TestingModule } from '@nestjs/testing';
import { SynclogController } from './synclog.controller';

describe('SynclogController', () => {
  let controller: SynclogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SynclogController],
    }).compile();

    controller = module.get<SynclogController>(SynclogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
