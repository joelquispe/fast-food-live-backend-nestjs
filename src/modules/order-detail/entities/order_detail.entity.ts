import OrderDetailOptionEntity from '@/modules/order-detail-option/entities/order_detail_option.entity';
import OrderEntity from '@/modules/order/entities/order.entity';
import ProductEntity from '@/modules/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'order_detail' })
class OrderDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price_unit: number;

  @Column()
  total: number;

  @ManyToOne(() => ProductEntity, (product) => product.orderDetails)
  @JoinColumn({ name: 'products_id' })
  product: ProductEntity;

  @ManyToOne(() => OrderEntity, (order) => order.orderDetails)
  @JoinColumn({ name: 'orders_id' })
  order: OrderEntity;

  @OneToMany(
    () => OrderDetailOptionEntity,
    (orderDetailOption) => orderDetailOption.orderDetail,
  )
  orderDetailOptions: OrderDetailOptionEntity[];
}

export default OrderDetailEntity;
