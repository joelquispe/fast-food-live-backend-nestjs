import OptionValueEntity from '@/modules/option-value/entities/optionValue.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItemOptionsEntity } from './cart_item_options.entity';

@Entity({
  name: 'cart_item_options_values',
})
export class CartItemOptionsValuesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(
    () => CartItemOptionsEntity,
    (value) => value.cartItemOptionsValues,
  )
  @JoinColumn({ name: 'cart_item_options_id' })
  cartItemOptions: CartItemOptionsEntity;

  @Column({ name: 'option_value_id' })
  optionValueId: number;

  @ManyToOne(() => OptionValueEntity, (value) => value.cartItemOptionsValues)
  @JoinColumn({ name: 'option_value_id' })
  optionValue: OptionValueEntity;
}
