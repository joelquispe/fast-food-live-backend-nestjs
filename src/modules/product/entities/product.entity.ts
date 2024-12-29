import OptionEntity from '@/modules/option/entities/option.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
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
}

export default ProductEntity;
