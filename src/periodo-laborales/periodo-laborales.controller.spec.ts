import { Test, TestingModule } from '@nestjs/testing';
import { PeriodoLaboralesController } from './periodo-laborales.controller';

describe('PeriodoLaboralesController', () => {
  let controller: PeriodoLaboralesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeriodoLaboralesController],
    }).compile();

    controller = module.get<PeriodoLaboralesController>(PeriodoLaboralesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
