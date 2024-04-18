import { Test, TestingModule } from '@nestjs/testing';
import { RegistroTokenService } from './registro-token.service';

describe('RegistroTokenService', () => {
  let service: RegistroTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroTokenService],
    }).compile();

    service = module.get<RegistroTokenService>(RegistroTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
