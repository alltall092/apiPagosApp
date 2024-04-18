import { Test, TestingModule } from '@nestjs/testing';
import { PaisaportacionService } from './paisaportacion.service';

describe('PaisaportacionService', () => {
  let service: PaisaportacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaisaportacionService],
    }).compile();

    service = module.get<PaisaportacionService>(PaisaportacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
