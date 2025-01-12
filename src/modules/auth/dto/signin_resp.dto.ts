import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class SigninRespDto {
  @ApiProperty()
  @IsString()
  access_token: string;
}

export default SigninRespDto;
