import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '../entity/transaction.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from '../createtransactiondto/createtransactiondto';

@Injectable()
export class TrasactionService {
constructor(@InjectRepository(Transaction)
private repository:Repository<Transaction>){}

getTransaction():Promise<Transaction[]>{

    return this.repository.find();
}
postTrasanction(datos:CreateTransactionDto){
const trans=this.repository.create(datos);
return this.repository.save(trans);



}
}
