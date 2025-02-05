import { Expose } from 'class-transformer';
import { CartItemOptionRespDto } from './cart_item_option_resp.dto';

export class CartItemRespDto {
  @Expose()
  id: number;

  @Expose()
  total: number;

  @Expose()
  quantity: number;

  @Expose()
  cart_id: number;

  @Expose()
  product_id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  price: number;

  @Expose()
  image: string;

  @Expose()
  options: CartItemOptionRespDto[];
}
