import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CartItemEntity from './cart_item.entity';
import CartItemOptionsValuesEntity from './cart_item_options_values.entity';

@Entity({ name: 'cart_item_options' })
class CartItemOptionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CartItemEntity, (value) => value.cartItemOptions)
  @JoinColumn({ name: 'cart_item_id' })
  cartItem: CartItemEntity;

  @OneToMany(
    () => CartItemOptionsValuesEntity,
    (value) => value.cartItemOptions,
  )
  cartItemOptionsValues: CartItemOptionsValuesEntity[];
}

export default CartItemOptionsEntity;
