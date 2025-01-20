import CartItemEntity from '@/modules/cart-items/entities/cart_item.entity';
import { CustomerEntity } from '@/modules/customer/entities/customer.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cart' })
class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CustomerEntity, (value) => value.carts)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @OneToMany(() => CartItemEntity, (value) => value.cart)
  cartItems: CartItemEntity[];
}

export default CartEntity;
