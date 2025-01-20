import { IsNotEmpty, IsNumber } from 'class-validator';

export class CartItemOptionValueReqDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNumber()
  cartItemOptionId: number;

  @IsNumber()
  optionValueId: number;
}
