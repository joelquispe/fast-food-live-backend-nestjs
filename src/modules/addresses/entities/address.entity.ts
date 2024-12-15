import { CustomerEntity } from 'src/modules/customers/entities/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  country: string;

  @Column()
  zipCode: string;

  @Column()
  reference: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  @ManyToOne(() => CustomerEntity, (customer) => customer.addresses)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  constructor(partial?: Partial<AddressEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

export default AddressEntity;
