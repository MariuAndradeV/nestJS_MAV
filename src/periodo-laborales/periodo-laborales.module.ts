import { Module } from '@nestjs/common';
import { PeriodoLaboralesController } from './periodo-laborales.controller';
import { PeriodoLaboralesService } from './periodo-laborales.service';

@Module({
    controllers: [PeriodoLaboralesController],
    providers:[PeriodoLaboralesService],
})
export class PeriodoLaboralesModule {}
