import AddressEntity from '@/modules/address/entities/address.entity';
import CartEntity from '@/modules/cart/entities/cart.entity';
import OrderEntity from '@/modules/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customers' })
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({
    name: 'date_of_birth',
    nullable: true,
  })
  dateOfBirth: Date;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => AddressEntity, (address) => address.customer)
  addresses: AddressEntity[];

  @OneToMany(() => OrderEntity, (order) => order.customer)
  orders: OrderEntity[];

  @OneToMany(() => CartEntity, (value) => value.customer)
  carts: CartEntity[];
}
