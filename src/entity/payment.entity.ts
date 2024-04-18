import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monto: number;

  @Column()
  fechaPago: Date;

  @Column()
  estadoPago: string;

  @Column()
  metodoPago: string;

  @ManyToOne(() => User, user => user.pagos)
  user: User;

  @OneToMany(() => Transaction, transaction => transaction.payment)
  transacciones: Transaction[];
}
