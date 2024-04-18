import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transferencia } from 'src/entity/transferencia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransferenciaService {
    constructor(@InjectRepository(Transferencia)
    private repository:Repository<Transferencia>){}
        async updateTransferencia(userId: number, datos: any): Promise<any> {
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
                 aportacionExistente.motivo = datos.motivo;
                 aportacionExistente.parentesco=datos.parentesco;
                 aportacionExistente.tiempo=datos.tiempo;
                 aportacionExistente.tipoDeTransferencia=datos.tipoDeTransferencia;
                 return this.repository.save(aportacionExistente);
            } catch (error) {
               throw error; 
            }


        }
}
