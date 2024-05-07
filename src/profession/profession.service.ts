import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profession } from './entities/profession.entity';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';

@Injectable()
export class ProfessionService {
  constructor(
    @InjectRepository(Profession)
    private professionRepository: Repository<Profession>,
  ) {}

  async create(createProfessionDto: CreateProfessionDto): Promise<Profession> {
    return this.professionRepository.save(createProfessionDto);
  }

  async findAll(): Promise<Profession[]> {
    return this.professionRepository.find();
  }

  async findOne(id: number): Promise<Profession> {
    return this.findOne(id);
  }

  async findOneByName(name: string): Promise<Profession> {
    return this.findOneByName(name);
  }

  async findOneByCategory(category: string): Promise<Profession> {
    return this.findOneByCategory(category);
  }

  async update(id: number, updateProfessionDto: UpdateProfessionDto): Promise<Profession> {
    await this.professionRepository.update(id, updateProfessionDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.professionRepository.delete(id);
  }
}