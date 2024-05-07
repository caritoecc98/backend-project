import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfessionDto {
  @Field()
  name: string;

  @Field()
  category: string;
}