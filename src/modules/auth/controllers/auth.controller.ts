import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import AuthDto from '../dto/auth.dto';
import { Public } from 'src/core/decorators/public.decorator';

import CreateCustomerResponseDto from '@/modules/customer/dtos/create_customer_response.dto';
import CustomerCreateDto from '@/modules/customer/dtos/customer.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import SigninRespDto from '../dto/signin_resp.dto';
import IDataResp from '@/core/dtos/data_resp.dto';
import DataFailed from '@/core/dtos/data_failed.dto';

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({
    type: IDataResp<SigninRespDto>,
  })
  @ApiNotFoundResponse({
    type: DataFailed,
  })
  @ApiBadRequestResponse({
    type: DataFailed,
  })
  @Public()
  @Post('/signin')
  async signin(@Body() body: AuthDto): Promise<SigninRespDto> {
    return this.authService.signin(body.email, body.password);
  }

  @Public()
  @Post('/signup')
  async signup(
    @Body() body: CustomerCreateDto,
  ): Promise<CreateCustomerResponseDto> {
    return this.authService.signup(body);
  }
}
