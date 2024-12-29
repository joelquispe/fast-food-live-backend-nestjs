import OptionEntity from '@/modules/option/entities/option.entity';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
}

export default OptionValueEntity;
