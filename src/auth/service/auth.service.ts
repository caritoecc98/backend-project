import { FindOneOptions } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from '../dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from '../dto/login.dto';
import { RequestResetPasswordDto } from '../dto/request-reset-password.dto';
import * as nodemailer from 'nodemailer';
import { v4 } from 'uuid';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import {validateRut} from "../functions/validate-rut";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  
  async register(registerInput: RegisterDto): Promise<User> { 
    const { name, lastName, email, password } = registerInput;

    const userExists = await this.usersService.findOneByEmail(email);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const newUser = await this.usersService.create({
      name,
      lastName,
      email,
      password: await bcryptjs.hash(password, 10),
    });

    return newUser;
  }
  
  /*
  async register({ rut, name, lastName , email, password }: RegisterDto) {
    const userRut = await this.usersService.findOneByRut(rut);
    const rutValido = await this.isValidRut(rut);
    if (!rutValido) {
      throw new BadRequestException('RUT inválido');
    }

    if (userRut) {
      throw new BadRequestException('User Rut already exists');
    }

    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    await this.usersService.create({
      rut,
      name,
      lastName,
      email,
      password: await bcryptjs.hash(password, 10),
    });
    return {
      name,
      email,
    };
  }
*/
  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findByEmailWithPassword(email);
    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('password is wrong');
    }

    const payload = { email: user.email, role: user.role };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email,
    };
  }

 async requestResetPassword(requestResetPasswordDto: RequestResetPasswordDto): Promise<void> {
  const { email } = requestResetPasswordDto;
  const user = await this.usersService.findByEmailWithPassword(email);
  if (user) {
    
    const newPassword = 'C' + Math.random().toString(36).slice(-7);
    user.password = await bcryptjs.hash(newPassword, 10);
    user.resetPasswordToken = v4();
    await this.usersService.update(user.id, { password: user.password, resetPasswordToken: user.resetPasswordToken });

    // Configurar nodemailer para enviar el correo electrónico
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kuky2881@gmail.com', 
        pass: 'ajkpfynfdsigqgqy', 
      },
    });

    // Enviar el correo electrónico de recuperación de contraseña
    //try {
      await transporter.sendMail({
        from: 'kuky2881@gmail.com', // Remitente
        to: user.email,             //destinatario
        subject: 'Solicitud cambio de contraseña', 
        text: ' Su contraseña temporal: ' + newPassword ,// texto correo electrónico
        //text: 'You have requested a password change, enter the link: localhost:3000/api/v1/auth/reset/' + token ,
        //enviar link del reset + token??
      });
      console.log('CORREO ENVIADO');
    //} catch (error) {
     // console.log('Error al enviar el correo electrónico:', error); // Agregar console.log() para test error
   // }
  } else {
    throw new BadRequestException('User not found');
  }
}
 
  async resetPassword(token: string, resetPasswordDto: ResetPasswordDto): Promise<void> {
    const { newPassword } = resetPasswordDto;
    const user = await this.usersService.findByResetPasswordToken(token);  
    console.log('buscando user');
    if (user) {
      // Actualizar la contraseña y el token de restablecimiento del usuario
      user.password = newPassword;
      user.resetPasswordToken = null;
      await this.usersService.update(user.id, { password: newPassword, resetPasswordToken: null });
    } else {
      throw new BadRequestException('Invalid or expired token');
    }
  }
    //async isValidRut(rut: string): Promise<boolean> {
    //  return validateRut(rut);
   // }

}