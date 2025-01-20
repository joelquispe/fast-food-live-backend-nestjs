import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateCardDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cardHolder: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{16}$/, { message: 'Debe tener 16 digitos' })
  cardNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3,4}$/, { message: 'Debe tener 3 digitos' })
  cvv: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastFourDigits: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{2}\/\d{2}$/, {
    message: 'El formato no es valido',
  })
  expirationDate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsIn(['debit', 'credit'], {
    message: 'Type must be either "debit" or "credit"',
  })
  type: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  customer_id: number;
}

export class UpdateCardDto extends PartialType(
  OmitType(CreateCardDto, ['customer_id'] as const),
) {}
