import CartEntity from '@/modules/cart/entities/cart.entity';
import ProductEntity from '@/modules/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CartItemOptionsEntity from './cart_item_options.entity';

@Entity({ name: 'cart_item' })
class CartItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => CartEntity, (value) => value.cartItems)
  @JoinColumn({ name: 'cart_id' })
  cart: CartEntity;

  @ManyToOne(() => ProductEntity, (value) => value.cartItems)
  @JoinColumn({ name: 'products_id' })
  product: ProductEntity;

  @OneToMany(() => CartItemOptionsEntity, (value) => value.cartItem)
  cartItemOptions: CartItemOptionsEntity[];
}

export default CartItemEntity;
