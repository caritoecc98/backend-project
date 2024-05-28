import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(returns => User)
  async getUserById(@Args('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserDto) {
    return this.usersService.create(input);
  }

  @Mutation(() => User) 
  async updateUser(
    @Args('id') id: number,
    @Args('input') input: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(+id, input);
  }

  @Mutation(() => User) 
  async deleteUser(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}