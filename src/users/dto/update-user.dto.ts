import { IsString, MinLength, Matches, NotEquals } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto {
//  @IsString()
//  @Field()
//  rut:string;

  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  lastName: string;

  @IsString()
  @Field()
  newPassword: string;

  @IsString()
  @Field()
  resetPasswordToken: string; 
}