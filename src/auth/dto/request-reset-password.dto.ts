import { IsEmail, IsNotEmpty,Matches } from 'class-validator';
import { Transform} from 'class-transformer';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RequestResetPasswordDto {
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())  //Elimina espacios en blanco
  @Matches(/^[^\u00C0-\u017F]+$/, { message: 'El correo no debe contener tildes' })
  @Field()
  email: string;

}