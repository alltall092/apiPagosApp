import { Body, Controller, Param, Put } from '@nestjs/common';
import { RegistroTokenService } from './registro-token.service';

@Controller('registro-token')
export class RegistroTokenController {
    constructor(private servi:RegistroTokenService){}

    @Put('/:userId')
    putToken(@Param('userId') userId:number,@Body() datos:any){
        console.log(datos);
        const token=this.servi.updateToken(userId,datos);
        return token;
    }

}
