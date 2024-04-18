import { Controller,Get,Post,Param,Body,Put,Delete} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entity/user.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Users')

@Controller('users')
export class UsersController {

    constructor(private readonly serviUser:UsersService){}

    @Get()
    async getfindall():Promise<User[]>{
    try {
    const users= await this.serviUser.getfindall();  
    return users;
    } catch (error) {
        console.log('error no cargan los usuarios')
    
    
    
    }
    
    
    }
    @Post()
    async postUser(@Body() body:any):Promise<any>{
    try {
    const user=await this.serviUser.postUser(body);
    return user;  
    } catch (error) {
        console.log('no se pueden insertar los datos')
    }
    
    
    }



}
