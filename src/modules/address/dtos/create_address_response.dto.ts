import { Expose, Transform } from 'class-transformer';

class CreateAddressResponseDto {
  @Expose()
  id: number;

  @Expose()
  street: string;

  @Expose()
  country: string;

  @Expose()
  zipCode: string;

  @Expose()
  reference: string;

  @Expose()
  city: string;

  @Expose()
  state: string;

  @Expose()
  latitude: number;

  @Expose()
  longitude: number;

  @Expose()
  @Transform(({ obj }) => (obj.customer ? obj.customer.id : null), {
    toClassOnly: true,
  })
  customer_id: number;
}

export default CreateAddressResponseDto;
