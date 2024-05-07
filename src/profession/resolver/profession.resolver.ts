import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Profession } from '../entities/profession.entity';
import { ProfessionService } from '../profession.service';
import { CreateProfessionDto } from '../dto/create-profession.dto';
import { UpdateProfessionDto } from '../dto/update-profession.dto';

@Resolver(() => Profession)
export class ProfessionResolver {
  constructor(private readonly professionService: ProfessionService) {}

  @Mutation(() => Profession)
  createProfession(@Args('createProfessionDto') createProfessionDto: CreateProfessionDto) {
    return this.professionService.create(createProfessionDto);
  }

  @Query(() => [Profession])
  findAll() {
    return this.professionService.findAll();
  }

  @Query(() => Profession)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.professionService.findOne(id);
  }

  @Query(() => Profession)
  findOneByName(@Args('name') name: string) {
    return this.professionService.findOneByName(name);
  }

  @Query(() => Profession)
  findOneByCategory(@Args('category') category: string) {
    return this.professionService.findOneByName(category);
  }

  @Mutation(() => Profession)
  updateProfession(@Args('id', { type: () => Int }) id: number, @Args('updateProfessionDto') 
  updateProfessionDto: UpdateProfessionDto) {
    return this.professionService.update(id, updateProfessionDto);
  }

  @Mutation(() => Profession)
  removeProfession(@Args('id', { type: () => Int }) id: number) {
    return this.professionService.remove(id);
  }
}