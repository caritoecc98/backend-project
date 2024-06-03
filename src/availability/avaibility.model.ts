import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Profession } from 'src/profession/entities/profession.entity';

@Entity()
export class Availability {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profession, (profession) => profession.id)
  profession: Profession;

  @Column()
  date: Date;
}