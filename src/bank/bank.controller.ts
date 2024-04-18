
import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { BankService } from './bank.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Bank')
@Controller('bank')
export class BankController {
    constructor(private servi:BankService){}
    @Put('/:userId')
    putbank(@Param('userId') userId:number,@Body() datos:any ){
        const bank=this.servi.createOrUpdate(userId,datos);
        return bank;
    }
    @Get()
    getBank(){
    const bank=this.servi.findAll();
    return bank;
    }
}
