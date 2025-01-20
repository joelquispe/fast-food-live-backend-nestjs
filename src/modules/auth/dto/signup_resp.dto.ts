import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class SignupRespDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Expose()
  firstName: string;

  @ApiProperty()
  @Expose()
  lastName: string;

  @ApiProperty()
  @Expose()
  dateOfBirth: Date;

  @ApiProperty()
  @Expose()
  phone: string;

  @ApiProperty()
  @Expose()
  email: string;

  @Exclude()
  password: string;
}
