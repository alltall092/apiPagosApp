// src/aportacion.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Aportacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timestamp: string;
}
