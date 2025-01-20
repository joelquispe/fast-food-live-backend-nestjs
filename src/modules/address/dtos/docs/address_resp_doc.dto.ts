import DataResp from '@/core/dtos/data_resp.dto';
import AddressRespDto from '../address_resp.dto';
import { ApiProperty } from '@nestjs/swagger';

class AddressRespDoc extends DataResp<AddressRespDto> {
  @ApiProperty({
    type: AddressRespDto,
  })
  data: AddressRespDto;
}

export default AddressRespDoc;
