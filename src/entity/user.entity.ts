import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert,OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Payment } from './payment.entity';
import { SyncLog } from './SyncLog.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'clientes' })
  roles: string;


  @OneToMany(() => Payment, payment => payment.user)
  pagos: Payment[];

  @OneToMany(() => SyncLog, syncLog => syncLog.user)
  registrosSincronizacion: SyncLog[];
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }
  
}
