import { Usuario } from 'src/entity/usuarios.entity';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
    constructor(@InjectRepository(Usuario)
    private repository:Repository<Usuario>){}
        async updateUser(userId: number, datos: any): Promise<any> {
            try {
                const id=userId
                 // Intenta actualizar la aportación
                 const aportacionExistente = await this.repository.findOne({where:{id}});
        
                 if (!aportacionExistente) {
                   // Si no se encontró ninguna aportación para actualizar, crea una nueva aportación
                   const nuevaAportacion = this.repository.create(datos);
                   return this.repository.save(nuevaAportacion);
                 }
           
                 // Si se encontró una aportación, actualiza el campo pais y guarda los cambios
                 aportacionExistente.usuario=datos.usuario;
                 aportacionExistente.contra=datos.contra;
            
                 return this.repository.save(aportacionExistente);
            } catch (error) {
               throw error; 
            }


        }



}
