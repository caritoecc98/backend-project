import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserDto) {
    return this.usersService.create(input);
  }

  @Query(() => [User])
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Query(() => [User])
  async getUserById(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }
  
  @Mutation(() => User) 
  async updateUser(@Args('id') id: string, @Args('input') input: UpdateUserDto) {
    return this.usersService.update(+id, input);
  }

  @Mutation(() => User) 
  async deleteUser(@Args('id') id: string) {
    return this.usersService.remove(+id);
  }
}