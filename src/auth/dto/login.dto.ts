import { Transform } from "class-transformer";
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength, IsNotEmpty,Matches } from "class-validator";

@InputType()
export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())  //Elimina espacios en blanco
  @Matches(/^[^\u00C0-\u017F]+$/, { message: 'El correo no debe contener tildes' })
  @Field()
  email: string;

  @IsString()
  @MinLength(8,{ message: 'La contraseña debe tener al menos 8 caracteres' })
  @Transform(({ value }) => value.trim(),)   //Elimina espacios en blanco
  @Matches(/[A-Z]/, { message: 'La contraseña debe contener al menos una letra mayúscula' })
  @Matches(/^[^\u00C0-\u017F\s]+$/,{ message: 'La contraseña no debe contener tildes' })
  @Field()
  password: string;
}