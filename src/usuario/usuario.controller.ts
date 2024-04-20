import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioController {
constructor(private servi:UsuarioService){}
@Put('/:userId')
putUser(@Param('userId')userId:number, @Body() datos:any){
    console.log(datos);
const user=this.servi.updateUser(userId,datos);
return user;

}
@Get()
getUser(){
return this.servi.getUser();

}
@Get('/:userId')
getByUser(@Param('userId') userId:number){
return this.servi.getByUser(userId);


}

}
