import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aportacion } from '../entity/aportaciones.entity';

@Injectable()
export class AportacionService {
    constructor(
        @InjectRepository(Aportacion)
        private readonly aportacionRepository: Repository<Aportacion>,
      ) {}
   
      async createAportacion(idEnviado: string): Promise<Aportacion> {
        const aportacion = new Aportacion();
        aportacion.timestamp = idEnviado;
    
        return this.aportacionRepository.save(aportacion);
      }
      
}
