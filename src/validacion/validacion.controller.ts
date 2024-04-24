import { Body, Controller, Get, Post } from '@nestjs/common';
import { ValidacionService } from './validacion.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Validacion')
@Controller('validacion')
export class ValidacionController {
    constructor(private servi:ValidacionService){}

    @Post()
    postValidacion(@Body() datos:any){
     const valid=this.servi.postValidacion(datos);
     return valid;   

    }
    // prueba de pagos

    @Get()
    getValidacion(){
        const valid=this.servi.getValidacion();
        return valid;
    }
}
