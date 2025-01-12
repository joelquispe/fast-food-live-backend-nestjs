import { ApiProperty } from '@nestjs/swagger';
import { OptionRespDto } from '../option.dto';
import DataResp from '@/core/dtos/data_resp.dto';

export class OptionFindAllRespDoc extends DataResp<[OptionRespDto]> {
  @ApiProperty({ type: [OptionRespDto] })
  data: [OptionRespDto];
}
