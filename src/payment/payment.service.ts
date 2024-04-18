import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from '../entity/payment.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from 'src/paymentdto/paymentdto';



@Injectable()
export class PaymentService {
    constructor(@InjectRepository(Payment)
private repository:Repository<Payment>
){}

getPayment=():Promise<Payment[]>=>{
try {
    const pay=this.repository.find();
    return pay; 
} catch (error) {
 throw error;   
}



}
postPayment=(datos:CreatePaymentDto):any=>{
const pay=this.repository.create(datos);
this.repository.save(pay);


}



}
