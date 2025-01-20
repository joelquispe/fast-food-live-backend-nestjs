import { ApiProperty } from '@nestjs/swagger';

class AddressRespDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  street: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  zipCode: string;

  @ApiProperty()
  reference: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  customer_id: number;
}

export default AddressRespDto;
