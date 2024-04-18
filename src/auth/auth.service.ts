import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity'; // Assuming this is your entity class
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm'; // Import InjectRepository decorator
import { Repository } from 'typeorm';
import { CreateUserDto } from '../createuserdto/createuserdto';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    
      async authenticate(credentials:CreateUserDto): Promise<{ isValid: boolean, result: any }> {
        try {
          const { email, password } = credentials;
          const user = await this.usersRepository.findOne({ where: { email } });
          
          if (user) {
            const isValid = bcrypt.compareSync(password, user.password);
            return { isValid, result: user };
          } else {
            return { isValid: false, result: null };
          }
        } catch (error) {
          throw error;
        }
      }
    
      genToken(data:any): string {
        try {
          const token = jwt.sign(data,'webtoken', {
            expiresIn: '2h',
            algorithm: 'HS512',
          });
          return token;
        } catch (error) {
          throw error;
        }
      }



}
