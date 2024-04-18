import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pais {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  pais: string;
}
