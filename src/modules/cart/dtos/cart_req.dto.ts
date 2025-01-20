import { IsNumber } from 'class-validator';

export class CartReqDto {
  @IsNumber()
  customerId: number;
}
