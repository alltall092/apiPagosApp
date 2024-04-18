import { Body, Controller, Param, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
constructor(private servi:UsuarioService){}
@Put('/:userId')
putUser(@Param('userId')userId:number, @Body() datos:any){
    console.log(datos);
const user=this.servi.updateUser(userId,datos);
return user;

}

}
