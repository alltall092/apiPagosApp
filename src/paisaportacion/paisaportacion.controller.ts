import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { PaisaportacionService } from './paisaportacion.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Pais')
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
@Get()
async getPaises(){
try {
  const paises=await this.servi.getPaises();
  return paises;  
} catch (err) {
    console.log('error no cargan los datos')
}


}

}
