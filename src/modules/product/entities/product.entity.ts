import { CartItemEntity } from '@/modules/cart-items/entities';
import OptionEntity from '@/modules/option/entities/option.entity';
import OrderDetailEntity from '@/modules/order-detail/entities/order_detail.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'products' })
class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('double precision')
  price: number;

  @Column()
  stock: number;

  @Column({
    nullable: true,
  })
  image: string;

  @Column()
  status: boolean;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ManyToMany(() => OptionEntity, (option) => option.products)
  @JoinTable({ name: 'products_options' })
  options: OptionEntity[];

  @OneToMany(() => OrderDetailEntity, (orderDetail) => orderDetail.product)
  orderDetails: OrderDetailEntity[];

  @OneToMany(() => CartItemEntity, (value) => value.product)
  cartItems: CartItemEntity[];
}

export default ProductEntity;
