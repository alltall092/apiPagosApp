import { Pais } from './../entity/pais.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaisaportacionService {
constructor(@InjectRepository(Pais)
private repository:Repository<Pais>){}
async updatePais(userId: number, pais: any): Promise<Pais> {
    try {
        const id=userId
         // Intenta actualizar la aportación
         const aportacionExistente = await this.repository.findOne({where:{id}});

         if (!aportacionExistente) {
           // Si no se encontró ninguna aportación para actualizar, crea una nueva aportación
           const nuevaAportacion = this.repository.create({pais});
           return this.repository.save(nuevaAportacion);
         }
   
         // Si se encontró una aportación, actualiza el campo pais y guarda los cambios
         aportacionExistente.pais = pais;
         return this.repository.save(aportacionExistente);
    } catch (error) {
       throw error; 
    }
    // Utiliza el método update del repositorio para actualizar el país
   
  }
  async getPaises():Promise<Pais[]>{
try {
  const paises=await this.repository.find();
  return paises;
} catch (error) {
  
}


  }
}
