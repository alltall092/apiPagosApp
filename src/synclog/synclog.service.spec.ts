import { Test, TestingModule } from '@nestjs/testing';
import { SynclogService } from './synclog.service';

describe('SynclogService', () => {
  let service: SynclogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SynclogService],
    }).compile();

    service = module.get<SynclogService>(SynclogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
