import { Controller, Get } from '@nestjs/common';
import { PeriodoLaboralesService } from './periodo-laborales.service';

@Controller('periodo-laborales')
export class PeriodoLaboralesController {
    constructor(private readonly userService: PeriodoLaboralesService){} 


    @Get() 
    findAll(){
        return this.userService.findAll()
    } 
    
}
