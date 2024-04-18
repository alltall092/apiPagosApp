import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrasactionService } from './trasaction.service';
import { Transaction } from '../entity/transaction.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateTransactionDto } from '../createtransactiondto/createtransactiondto';
@ApiTags('Transactions')
@Controller('transaction')
export class TrasactionController {
    constructor(private servi:TrasactionService){}
@Get()
async getTrasaction():Promise<Transaction[]>{
try {
    const transaction=await this.servi.getTransaction();
    return transaction;
} catch (error) {
    console.log('no cargar los datos');
}


}
@Post()
postTransaction(@Body()datos:CreateTransactionDto){
const trans=this.servi.postTrasanction(datos);
return trans;

}


}
