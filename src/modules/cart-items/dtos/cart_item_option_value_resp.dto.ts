import { Expose } from 'class-transformer';

export class CartItemOptionValuesRespDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  price: number;

  @Expose()
  quantity: number;
}
