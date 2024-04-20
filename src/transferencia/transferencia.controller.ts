import { InjectRepository } from '@nestjs/typeorm';
import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { TransferenciaService } from './transferencia.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Transferencia')
@Controller('transferencia')
export class TransferenciaController {
constructor(private servi:TransferenciaService){}

@Put('/:userId')
    putTransferencia(@Param('userId') userId:number,@Body() datos:any){
console.log(datos);
        const trans=this.servi.updateTransferencia(userId,datos);
        return trans;
    }

@Get()
async getTransferencia(){
    try {
        const trans=await this.servi.getTransferencia();
        return trans;
    } catch (error) {
        console.log('no pueden cargar los datos');
    }

}
}
