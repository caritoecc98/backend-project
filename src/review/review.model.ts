import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Profession } from 'src/profession/entities/profession.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Profession, (profession) => profession.id)
  profession: Profession;

  @Column()
  rating: number;

  @Column()
  comment: string;
}