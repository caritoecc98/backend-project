import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { ObjectType, Field, Int, Directive } from '@nestjs/graphql';
import { Reservation } from 'src/reservation/entinty/reservation.entity';
import { Profession } from 'src/profession/entities/profession.entity';
import { OneToMany } from 'typeorm';

@Entity()
@ObjectType()
  export class User {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    lastName: string;
  
    @Field()
    @Column({ unique: true, nullable: false })
    email: string;
  
    @Field()
    @Column({ nullable: false, select: false })
    password: string;
  
    @Field()
    @Column({
      type: 'uuid',
      unique: true,
      name: 'reset_password_token',
      nullable: true,
    })
    resetPasswordToken: string;
  
    @Field()
    @Column({ default: 'user' })
    role: string;
  
    @Field()
    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Reservation, (reservation) => reservation.user)
    @Field((type) => [Reservation])
    reservations: Reservation[];
    
    @OnteToMany(() => Profession, (profession) => profession.name)
    @Field((type) => [Profession])
    professions: Profession[];
  }