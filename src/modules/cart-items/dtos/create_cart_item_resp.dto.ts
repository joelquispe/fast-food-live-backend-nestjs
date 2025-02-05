import { Expose } from 'class-transformer';
import { CartItemRespDto } from './cart_item_resp.dto';

export class CreateCartItemRespDto {
  @Expose()
  id: number;

  @Expose()
  cart_id: number;

  @Expose()
  products: CartItemRespDto[];
}
