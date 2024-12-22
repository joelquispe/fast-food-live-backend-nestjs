import { OmitType, PartialType } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  cardHolder: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{16}$/, { message: 'Debe tener 16 digitos' })
  cardNumber: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3,4}$/, { message: 'Debe tener 3 digitos' })
  cvv: string;

  @IsString()
  @IsNotEmpty()
  lastFourDigits: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{2}\/\d{2}$/, {
    message: 'El formato no es valido',
  })
  expirationDate: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['debit', 'credit'], {
    message: 'Type must be either "debit" or "credit"',
  })
  type: string;

  @IsNumber()
  @IsNotEmpty()
  customer_id: number;
}

export class UpdateCardDto extends PartialType(
  OmitType(CreateCardDto, ['customer_id'] as const),
) {}
