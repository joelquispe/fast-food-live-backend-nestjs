import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import OptionEntity from './option.entity';

@Entity({ name: 'option_values' })
class OptionValueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => OptionEntity, (option) => option.optionValue)
  option: OptionEntity;
}

export default OptionValueEntity;
