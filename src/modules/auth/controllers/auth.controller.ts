import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import AuthDto from '../dto/auth.dto';
import { Public } from 'src/core/decorators/public.decorator';
import CustomerCreateDto from 'src/modules/customers/dtos/customer.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/signin')
  async signin(@Body() body: AuthDto) {
    return this.authService.signin(body.email, body.password);
  }

  @Public()
  @Post('/signup')
  async signup(@Body() body: CustomerCreateDto) {
    return this.authService.signup(body);
  }
}
