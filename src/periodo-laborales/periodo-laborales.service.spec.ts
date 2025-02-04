import { Test, TestingModule } from '@nestjs/testing';
import { PeriodoLaboralesService } from './periodo-laborales.service';

describe('PeriodoLaboralesService', () => {
  let service: PeriodoLaboralesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeriodoLaboralesService],
    }).compile();

    service = module.get<PeriodoLaboralesService>(PeriodoLaboralesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
