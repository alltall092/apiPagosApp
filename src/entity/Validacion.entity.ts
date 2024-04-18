// validacion.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Validacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idAportacion: number;

  @Column()
  numero: string;
}
