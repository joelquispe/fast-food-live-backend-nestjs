import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class AddressCreateDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  zipCode: string;

  @IsString()
  @IsOptional()
  reference: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  state: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsNumber()
  @IsNotEmpty()
  customer_id: number;
}

export default AddressCreateDto;
