import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reservation')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @Column()
  adult: number;

  @Column()
  children: number;

  @Column()
  room: number;

  @Column()
  rooms: string;
}
