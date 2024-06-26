import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength, IsNotEmpty,Matches, isNotEmpty } from "class-validator";
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterDto {
  //@IsNotEmpty()
  //@IsString()
  //@Field()
  //rut:string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z0-9]+$/, { message: 'El nombre no debe contener caracteres especiales ' })
  @Field()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z0-9]+$/, { message: 'El apellido no debe contener caracteres especiales ' })
  @Field()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())  //Elimina espacios en blanco
  @Matches(/^[^\u00C0-\u017F]+$/, { message: 'El correo no debe contener tildes ' })
  @Field()
  email: string;

  @IsString()
  @Transform(({ value }) => value.trim())  //Elimina espacios en blanco
  @MinLength(8,{ message: 'La contraseña debe tener al menos 8 caracteres ' })
  @Matches(/[A-Z]/, { message: 'La contraseña debe contener al menos una letra mayúscula ' })
  @Matches(/^[^\u00C0-\u017F\s]+$/,{ message: 'La contraseña no debe contener tildes ' })
  @Field()
  password: string;


}
