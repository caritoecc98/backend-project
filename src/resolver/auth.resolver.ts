import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from 'src/auth/service/auth.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
import { RequestResetPasswordDto } from 'src/auth/dto/request-reset-password.dto';
import { ResetPasswordDto } from 'src/auth/dto/reset-password.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String) 
  async register(@Args('registerInput') registerInput: RegisterDto) {
    return this.authService.register(registerInput);
  }

  @Mutation(() => String) 
  async login(@Args('loginInput') loginInput: LoginDto) {
    return this.authService.login(loginInput);
  }

  @Mutation(() => String)
  async requestResetPassword(@Args('requestResetPasswordInput') requestResetPasswordInput: RequestResetPasswordDto) {
    return this.authService.requestResetPassword(requestResetPasswordInput);
  }

  @Mutation(() => String) 
  async resetPassword(@Args('token') token: string, @Args('resetPasswordInput') resetPasswordInput: ResetPasswordDto) {
    return this.authService.resetPassword(token, resetPasswordInput);
  }
}