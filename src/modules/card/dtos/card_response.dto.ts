import { Exclude, Expose, Transform } from 'class-transformer';

class CardResponseDto {
  @Expose()
  id: number;

  @Expose()
  cardNumber: string;

  @Expose()
  cardHolder: string;

  @Expose()
  cvv: string;

  @Expose()
  expirationDate: string;

  @Expose()
  lastFourDigits: string;

  @Expose()
  @Transform(({ obj }) => (obj.customer ? obj.customer.id : null), {
    toClassOnly: true,
  })
  customer_id: number;
}

export default CardResponseDto;
