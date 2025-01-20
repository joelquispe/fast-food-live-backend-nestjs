import { IsNotEmpty, IsNumber } from 'class-validator';

export class CartItemOptionReqDto {
  @IsNotEmpty()
  @IsNumber()
  cartItemId: number;

  @IsNotEmpty()
  @IsNumber()
  optionValueId: number;
}
