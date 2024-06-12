import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions  } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly prismaService: PrismaService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findByEmailWithPassword(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { email },
      //select: ['id','name','rut', 'email', 'password', 'role'],
      select: ['id','name', 'email', 'password', 'role'],
    });
  }

  //async findOneByRut(rut: string): Promise<User | undefined> {
    //return this.userRepository.findOne({ where: { rut } });
  //}

  async findAll(): Promise<User[]> {
    //return this.userRepository.find();
    return await this.prismaService.users.findMany()
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id } });
  }
  
  async update(id: number, data: Partial<User>): Promise<User> {
    await this.userRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }

  async findByResetPasswordToken(token: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { resetPasswordToken: token } });
  }
}
