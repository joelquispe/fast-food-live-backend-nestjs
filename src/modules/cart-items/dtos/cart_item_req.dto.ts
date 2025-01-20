import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { CartItemOptionReqDto } from './cart_item_option_req.dto';

export class CartItemReqDto {
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  cartId: number;

  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsArray()
  options: CartItemOptionReqDto[];
}
