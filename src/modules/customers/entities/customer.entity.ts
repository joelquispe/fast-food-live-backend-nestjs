import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'customers' })
export class CustomerEntity {
  @PrimaryColumn()
  idCustomer: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
