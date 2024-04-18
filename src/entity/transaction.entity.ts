import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Payment } from './payment.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipoTransaccion: string;

  @Column()
  monto: number;

  @Column()
  fechaTransaccion: Date;

  @Column()
  descripcion: string;

  @ManyToOne(() => Payment, payment => payment.transacciones)
  payment: Payment;
}
