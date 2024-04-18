// aportacion.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transferencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipoDeTransferencia: string;

  @Column()
  parentesco: string;

  @Column()
  tiempo: string;

  @Column()
  motivo: string;
}
