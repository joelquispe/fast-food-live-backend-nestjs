import { ApiProperty } from '@nestjs/swagger';

class CardRespDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  cardHolder: string;

  @ApiProperty()
  cardNumber: string;

  @ApiProperty()
  cvv: string;

  @ApiProperty()
  lastFourDigits: string;

  @ApiProperty()
  expirationDate: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  customer_id: number;
}

export default CardRespDto;
