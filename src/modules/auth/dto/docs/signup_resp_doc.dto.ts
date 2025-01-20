import DataResp from '@/core/dtos/data_resp.dto';
import { ApiProperty } from '@nestjs/swagger';
import { SignupRespDto } from '../signup_resp.dto';
export class SignupRespDoc extends DataResp<SignupRespDto> {
  @ApiProperty({
    type: SignupRespDto,
  })
  data: SignupRespDto;
}
