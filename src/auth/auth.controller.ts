import { Body, Controller, HttpCode, HttpStatus, Post, Patch, Query } from "@nestjs/common";
import { AuthService } from "./service/auth.service";
import { RequestResetPasswordDto } from "./dto/request-reset-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() registerInput: RegisterDto) {
    return this.authService.register(registerInput);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post("login")
  login(@Body() loginInput: LoginDto) {
    return this.authService.login(loginInput);
  }

  @HttpCode(HttpStatus.OK)
  @Patch("request")
  async requestResetPassword(
    @Body() requestResetPasswordInput: RequestResetPasswordDto,
  ): Promise<void> {
    await this.authService.requestResetPassword(requestResetPasswordInput);
  }

  @HttpCode(HttpStatus.OK)
  @Patch("reset")
  async resetPassword(
    @Query('token') token: string,
    @Body() resetPasswordInput: ResetPasswordDto,
  ): Promise<void> {
    await this.authService.resetPassword(token, resetPasswordInput);
  }
}