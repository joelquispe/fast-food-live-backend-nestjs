import OrderDetailEntity from '@/modules/order-detail/entities/order_detail.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order_detail_options' })
class OrderDetailOptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => OrderDetailEntity,
    (orderDetail) => orderDetail.orderDetailOptions,
  )
  orderDetail: OrderDetailEntity;
}

export default OrderDetailOptionEntity;
