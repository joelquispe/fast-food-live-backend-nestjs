import { Transform } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

class CustomerCreateDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => (value ? new Date(value) : null))
  dateOfBirth: Date;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export default CustomerCreateDto;
