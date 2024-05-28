import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
 // @Field()
//  rut: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}