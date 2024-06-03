import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Profession } from 'src/profession/entities/profession.entity';
import { Message } from 'src/message/message.model';
import { Availability } from 'src/availability/avaibility.model';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Profession, (profession) => profession.id)
  profession : Profession;

  @Column()
  date: Date;

  @Column()
  state: string;

  @ManyToOne(() => Message, (message) => message.id)
  message: Message;

  @ManyToOne(() => Availability, (availability) => availability.id)
  availability: Availability;
}