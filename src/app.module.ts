import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Payment } from './entity/payment.entity';
import { Transaction } from './entity/transaction.entity';
import { SyncLog } from './entity/SyncLog.entity';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { TrasactionController } from './trasaction/trasaction.controller';
import { TrasactionService } from './trasaction/trasaction.service';
import { SynclogController } from './synclog/synclog.controller';
import { SynclogService } from './synclog/synclog.service';
import { AportacionController } from './aportacion/aportacion.controller';
import { AportacionService } from './aportacion/aportacion.service';
import { Aportacion } from './entity/aportaciones.entity';
import { PaisaportacionController } from './paisaportacion/paisaportacion.controller';
import { PaisaportacionService } from './paisaportacion/paisaportacion.service';
import { Pais } from './entity/pais.entity';
import { Transferencia } from './entity/transferencia.entity';
import { Usuario } from './entity/usuarios.entity';
import { TransferenciaController } from './transferencia/transferencia.controller';
import { TransferenciaService } from './transferencia/transferencia.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { RegistroToken } from './entity/token.entity';
import { RegistroTokenController } from './registro-token/registro-token.controller';
import { RegistroTokenService } from './registro-token/registro-token.service';
import { Validacion } from './entity/Validacion.entity';
import { ValidacionController } from './validacion/validacion.controller';
import { ValidacionService } from './validacion/validacion.service';
import { Bank } from './entity/bank.entity';
import { BankController } from './bank/bank.controller';
import { BankService } from './bank/bank.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'storage'), // Directorio donde se encuentran tus imágenes estáticas
      serveRoot: '/storage', // Ruta base para servir las imágenes estáticas
    }),
    TypeOrmModule.forFeature([User,Payment,Transaction,SyncLog,Aportacion,Pais,Transferencia,Usuario,RegistroToken,Validacion,Bank]),
    DatabaseModule],
  controllers: [AppController, UsersController, AuthController, PaymentController, TrasactionController, SynclogController, AportacionController, PaisaportacionController, TransferenciaController, UsuarioController, RegistroTokenController, ValidacionController, BankController],
  providers: [AppService, UsersService, AuthService, PaymentService, TrasactionService, SynclogService, AportacionService, PaisaportacionService, TransferenciaService, UsuarioService, RegistroTokenService, ValidacionService, BankService],
})
export class AppModule {}
