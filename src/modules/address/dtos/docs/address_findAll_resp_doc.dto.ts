import DataResp from '@/core/dtos/data_resp.dto';
import { ApiProperty } from '@nestjs/swagger';
import AddressRespDto from '../address_resp.dto';

class AddressFindAllRespDoc extends DataResp<[AddressRespDto]> {
  @ApiProperty({
    type: [AddressRespDto],
  })
  data: [AddressRespDto];
}

export default AddressFindAllRespDoc;
