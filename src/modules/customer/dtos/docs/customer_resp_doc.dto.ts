import DataResp from '@/core/dtos/data_resp.dto';
import { ApiProperty } from '@nestjs/swagger';
import CustomerRespDto from '../customer_resp.dto';

class CustomerRespDoc extends DataResp<[CustomerRespDto]> {
  @ApiProperty({
    type: [CustomerRespDto],
  })
  data: [CustomerRespDto];
}

export default CustomerRespDoc;
