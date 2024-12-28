import { Exclude, Expose } from 'class-transformer';

class CreateCustomerResponseDto {
  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  dateOfBirth: Date;

  @Expose()
  phone: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;
}

export default CreateCustomerResponseDto;
