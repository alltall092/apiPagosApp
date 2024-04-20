import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { RegistroTokenService } from './registro-token.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Token')
@Controller('registro-token')
export class RegistroTokenController {
    constructor(private servi:RegistroTokenService){}

    @Put('/:userId')
    putToken(@Param('userId') userId:number,@Body() datos:any){
        console.log(datos);
        const token=this.servi.updateToken(userId,datos);
        return token;
    }
@Get()
async getToken(){
try {
    const token=await this.servi.getToken();
    return token;
} catch (error) {
    console.log('error no cargan los datos')
}

}
}
