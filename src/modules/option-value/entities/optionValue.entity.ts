import OptionEntity from '@/modules/option/entities/option.entity';
import OrderDetailOptionValueEntity from '@/modules/order-detail-option/entities/order_detail_option_value.entity';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'options_values' })
class OptionValueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => OptionEntity, (option) => option.optionsValues)
  @JoinColumn({ name: 'options_id' })
  option: OptionEntity;

  @OneToMany(() => OrderDetailOptionValueEntity, (value) => value.optionValue)
  orderDetailOptionValues: OrderDetailOptionValueEntity[];
}

export default OptionValueEntity;
