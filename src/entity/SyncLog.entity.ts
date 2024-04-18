import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class SyncLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ultimaSincronizacion: Date;

  @Column()
  estadoSincronizacion: string;

  @Column()
  detallesSincronizacion: string;

  @ManyToOne(() => User, user => user.registrosSincronizacion)
  user: User;
}
