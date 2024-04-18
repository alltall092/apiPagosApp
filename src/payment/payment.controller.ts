import { Payment } from './../entity/payment.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePaymentDto } from 'src/paymentdto/paymentdto';
@ApiTags('Payments')
@Controller('payment')
export class PaymentController {
constructor(private servi:PaymentService){}
@Get()
async getpayment():Promise<Payment[]>{
const payment= await this.servi.getPayment();
return payment;
}
@Post()
postpayment(@Body() datos:CreatePaymentDto){
    const payment=this.servi.postPayment(datos);
    return payment;

}

}
