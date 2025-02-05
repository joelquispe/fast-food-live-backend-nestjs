import { CartItemOptionsEntity } from '@/modules/cart-items/entities';
import OptionValueEntity from '@/modules/option-value/entities/optionValue.entity';
import ProductEntity from '@/modules/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'options' })
class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @ManyToMany(() => ProductEntity, (product) => product.options)
  @JoinTable({ name: 'products_options' })
  products: ProductEntity[];

  @OneToMany(() => OptionValueEntity, (optionValue) => optionValue.option, {
    onDelete: 'CASCADE',
  })
  optionsValues: OptionValueEntity[];

  @OneToMany(() => CartItemOptionsEntity, (value) => value.option)
  cartItemOptions: CartItemOptionsEntity[];

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'updated_at', default: new Date() })
  updatedAt: Date;
}

export default OptionEntity;
