import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import OptionValueEntity from './optionValue.entity';

@Entity({ name: 'options' })
class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  // @ManyToMany(()=> ProductEntity, product => product.options);
  // product: ProductEntity;

  @OneToMany(() => OptionValueEntity, (optionValue) => optionValue.option)
  optionValue: OptionValueEntity[];
}

export default OptionEntity;
