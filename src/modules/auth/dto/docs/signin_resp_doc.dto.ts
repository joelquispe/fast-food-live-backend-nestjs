import DataResp from '@/core/dtos/data_resp.dto';
import { ApiProperty } from '@nestjs/swagger';
import { SigninRespDto } from '../signin_resp.dto';
export class SigninRespDoc extends DataResp<SigninRespDto> {
  @ApiProperty({
    type: SigninRespDto,
  })
  data: SigninRespDto;
}
