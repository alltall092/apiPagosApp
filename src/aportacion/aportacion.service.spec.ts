import { Test, TestingModule } from '@nestjs/testing';
import { AportacionService } from './aportacion.service';

describe('AportacionService', () => {
  let service: AportacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AportacionService],
    }).compile();

    service = module.get<AportacionService>(AportacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
