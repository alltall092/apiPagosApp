import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroToken } from 'src/entity/token.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistroTokenService {
    constructor(@InjectRepository(RegistroToken)
    private repository:Repository<RegistroToken>){}
        async updateToken(userId: number, datos: any): Promise<any> {
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
             
                 aportacionExistente.token=datos.token;
                 return this.repository.save(aportacionExistente);
            } catch (error) {
               throw error; 
            }


        }
async getToken():Promise<RegistroToken[]>{
try {
    const token=await this.repository.find();
    return token;
} catch (error) {
    throw error;
}

}




}
