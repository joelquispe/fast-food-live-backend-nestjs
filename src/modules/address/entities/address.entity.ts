import { CustomerEntity } from 'src/modules/customer/entities/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'addresses' })
class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  country: string;

  @Column({ name: 'zip_code' })
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
