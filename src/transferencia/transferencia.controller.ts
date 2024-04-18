import { InjectRepository } from '@nestjs/typeorm';
import { Body, Controller, Param, Put } from '@nestjs/common';
import { TransferenciaService } from './transferencia.service';

@Controller('transferencia')
export class TransferenciaController {
constructor(private servi:TransferenciaService){}

@Put('/:userId')
    putTransferencia(@Param('userId') userId:number,@Body() datos:any){
console.log(datos);
        const trans=this.servi.updateTransferencia(userId,datos);
        return trans;
    }

}
