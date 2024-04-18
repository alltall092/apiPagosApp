import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UsersService {
    constructor(  
        @InjectRepository(User)
        private repository:Repository<User>){}
    
     getfindall():Promise<User[]>{
    
    return this.repository.find();
    
    
        }
    

    
     postUser(datos:User):Promise<User>{
    try {
        const newUser= this.repository.create(datos);
        return this.repository.save(newUser);
    } catch (error) {
       throw error 
    }
    
    
    }

}
