import DataResp from '@/core/dtos/data_resp.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ProductRespDto } from '../product_resp.dto';

class ProductRespDoc extends DataResp<ProductRespDto> {
  @ApiProperty({ type: ProductRespDto })
  data: ProductRespDto;
}

export default ProductRespDoc;
