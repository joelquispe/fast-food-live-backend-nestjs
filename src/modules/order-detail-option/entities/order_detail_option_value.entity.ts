import OptionValueEntity from '@/modules/option-value/entities/optionValue.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order_detail_option_value' })
class OrderDetailOptionValueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(
    () => OptionValueEntity,
    (optionValue) => optionValue.orderDetailOptionValues,
  )
  optionValue: OptionValueEntity;
}

export default OrderDetailOptionValueEntity;
