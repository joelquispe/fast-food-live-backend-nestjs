import DataResp from '@/core/dtos/data_resp.dto';
import { ApiProperty } from '@nestjs/swagger';
import { OptionRespDto } from '../option.dto';

export class OptionRespDoc extends DataResp<OptionRespDto> {
  @ApiProperty({ type: OptionRespDto })
  data: OptionRespDto;
}
