import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { ObjectType, Field, Int, Directive } from '@nestjs/graphql';

@Entity()
@ObjectType()
  export class User {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Field()
    @Column()
    rut: string;

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
    
  }