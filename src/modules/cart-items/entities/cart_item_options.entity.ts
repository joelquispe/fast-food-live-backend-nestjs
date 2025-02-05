import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItemEntity } from './cart_item.entity';
import { CartItemOptionsValuesEntity } from './cart_item_options_values.entity';
import OptionEntity from '@/modules/option/entities/option.entity';

@Entity({ name: 'cart_item_options' })
export class CartItemOptionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'options_id' })
  optionsId: number;

  @ManyToOne(() => OptionEntity, (option) => option.cartItemOptions)
  @JoinColumn({ name: 'options_id' })
  option: OptionEntity;

  @ManyToOne(() => CartItemEntity, (value) => value.cartItemOptions)
  @JoinColumn({ name: 'cart_item_id' })
  cartItem: CartItemEntity;

  @OneToMany(
    () => CartItemOptionsValuesEntity,
    (value) => value.cartItemOptions,
  )
  cartItemOptionsValues: CartItemOptionsValuesEntity[];
}
