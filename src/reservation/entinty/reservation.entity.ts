import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Profession } from 'src/profession/entities/profession.entity';

@Entity()
@ObjectType()
export class Reservation {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
/*
  @ManyToOne(() => User, (user) => user.reservations)
  @Field((type) => User)
  user: User;

  @ManyToOne(() => Profession, (profession) => profession.reservations)
  @Field((type) => Profession)
  profession: Profession;
*/
  @Field()
  @Column()
  date: Date;

  @Field()
  @Column()
  state: string;
}