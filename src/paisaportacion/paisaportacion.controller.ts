import { Body, Controller, Param, Put } from '@nestjs/common';
import { PaisaportacionService } from './paisaportacion.service';

@Controller('paisaportacion')
export class PaisaportacionController {
constructor(private servi:PaisaportacionService){}
@Put('/:userId')
putUpdate(@Body() datos:any,@Param('userId') userId:number){
const {pais}=datos;
console.log(pais);
const paises=this.servi.updatePais(userId,pais);
return paises;

}

}
