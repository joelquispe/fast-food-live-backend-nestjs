import { Expose } from 'class-transformer';
import { CartItemOptionValuesRespDto } from './cart_item_option_value_resp.dto';

export class CartItemOptionRespDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  optionsValues: CartItemOptionValuesRespDto[];
}
