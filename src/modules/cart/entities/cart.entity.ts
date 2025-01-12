import CartItemEntity from '@/modules/cart-items/entities/cart_item.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cart' })
class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CartItemEntity, (value) => value.cart)
  cartItems: CartItemEntity[];
}

export default CartEntity;
