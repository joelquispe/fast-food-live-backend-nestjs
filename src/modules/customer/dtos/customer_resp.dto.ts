import { ApiProperty } from '@nestjs/swagger';

class CustomerRespDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
}

export default CustomerRespDto;
