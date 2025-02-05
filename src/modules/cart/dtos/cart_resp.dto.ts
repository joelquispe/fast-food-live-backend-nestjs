import { CartItemRespDto } from '@/modules/cart-items/dtos';
import { Expose } from 'class-transformer';
export class CartRespDto {
  @Expose()
  id: number;

  @Expose()
  customer_id: number;

  @Expose()
  items: CartItemRespDto[];
}
