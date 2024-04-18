import { Validacion } from './../entity/Validacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ValidacionService {
    constructor(@InjectRepository(Validacion)
private repository:Repository<Validacion>){}
postValidacion(datos:any){
const valid=this.repository.create(datos);
return this.repository.save(valid);




}
}
