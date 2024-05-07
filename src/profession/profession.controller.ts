import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';

@Controller('profession')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @Post()
  create(@Body() createProfessionDto: CreateProfessionDto) {
    return this.professionService.create(createProfessionDto);
  }

  @Get()
  findAll() {
    return this.professionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.professionService.findOne(id);
  }

  @Get(':name')
  findOneByName(@Param('name') name: string) {
    return this.professionService.findOneByName(name);
  }

  @Get(':category')
  findOneByCategory(@Param('category') category: string) {
    return this.professionService.findOneByCategory(category);
  }

  @Put(':id')
  update(@Param('id') id: number, 
  @Body() updateProfessionDto: UpdateProfessionDto) {
    return this.professionService.update(id, updateProfessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.professionService.remove(id);
  }
}