// registro-token.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RegistroToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;
}
