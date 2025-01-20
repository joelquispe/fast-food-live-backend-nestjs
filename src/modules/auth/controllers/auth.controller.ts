import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Public } from 'src/core/decorators/public.decorator';
import CustomerCreateDto from '@/modules/customer/dtos/customer.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import DataFailed from '@/core/dtos/data_failed.dto';

import { SigninReqDto, SigninRespDto, SignupRespDto } from '../dto';
import { SigninRespDoc, SignupRespDoc } from '../dto/docs';

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({
    type: SigninRespDoc,
  })
  @ApiNotFoundResponse({
    type: DataFailed,
  })
  @ApiBadRequestResponse({
    type: DataFailed,
  })
  @Public()
  @Post('/signin')
  async signin(@Body() body: SigninReqDto): Promise<SigninRespDto> {
    return this.authService.signin(body.email, body.password);
  }

  @ApiCreatedResponse({
    type: SignupRespDoc,
  })
  @Public()
  @Post('/signup')
  async signup(@Body() body: CustomerCreateDto): Promise<SignupRespDto> {
    return this.authService.signup(body);
  }
}
