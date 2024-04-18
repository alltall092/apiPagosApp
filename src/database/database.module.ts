import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SyncLog } from '../entity/SyncLog.entity';
import { Payment } from '../entity/payment.entity';
import { User } from '../entity/user.entity';
import { Transaction } from '../entity/transaction.entity';
import { Aportacion } from 'src/entity/aportaciones.entity';
import { Pais } from '../entity/pais.entity';
import { Transferencia } from 'src/entity/transferencia.entity';
import { Usuario } from 'src/entity/usuarios.entity';
import { RegistroToken } from 'src/entity/token.entity';
import { Validacion } from 'src/entity/Validacion.entity';
import { Bank } from 'src/entity/bank.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'boeu8hvoi5q1q4wyoase-mysql.services.clever-cloud.com',
          port: 3306,
          username: 'ukr8e6mcmkilza1u',
          password: 'oQTd5VNutRFvSqQbml3A',
          database: 'boeu8hvoi5q1q4wyoase',
          entities: [User,Payment,SyncLog,Transaction,Aportacion,Pais,Transferencia,Usuario,RegistroToken,Validacion,Bank],
          synchronize: true,
        }),
      ],
})
export class DatabaseModule {}
