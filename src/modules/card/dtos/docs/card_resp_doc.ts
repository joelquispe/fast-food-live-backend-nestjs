import DataResp from '@/core/dtos/data_resp.dto';
import CardRespDto from '../card_resp.dto';
import { ApiProperty } from '@nestjs/swagger';

class CardRespDoc extends DataResp<CardRespDto> {
  @ApiProperty({
    type: CardRespDto,
  })
  data: CardRespDto;
}

export default CardRespDoc;
