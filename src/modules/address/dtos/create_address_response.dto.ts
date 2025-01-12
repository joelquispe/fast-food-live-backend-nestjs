import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

class CreateAddressResponseDto {
  @ApiProperty({ example: 1, description: 'Unique identifier for the address' })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Calle Ficticia 123', description: 'Street address' })
  @Expose()
  street: string;

  @ApiProperty({
    example: 'FicticiaLand',
    description: 'Country of the address',
  })
  @Expose()
  country: string;

  @ApiProperty({ example: '12345', description: 'Postal code of the address' })
  @Expose()
  zipCode: string;

  @ApiProperty({
    example: 'Near the big park',
    description: 'Reference for the address',
  })
  @Expose()
  reference: string;

  @ApiProperty({
    example: 'Ciudad Ficticia',
    description: 'City of the address',
  })
  @Expose()
  city: string;

  @ApiProperty({
    example: 'FicticiaState',
    description: 'State of the address',
  })
  @Expose()
  state: string;

  @ApiProperty({ example: 19.432608, description: 'Latitude of the address' })
  @Expose()
  latitude: number;

  @ApiProperty({ example: -99.133209, description: 'Longitude of the address' })
  @Expose()
  longitude: number;

  @ApiProperty({
    example: 101,
    description: 'Customer ID associated with the address',
  })
  @Expose()
  @Transform(({ obj }) => (obj.customer ? obj.customer.id : null), {
    toClassOnly: true,
  })
  customer_id: number;
}

export default CreateAddressResponseDto;
