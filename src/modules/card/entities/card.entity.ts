import { CustomerEntity } from 'src/modules/customers/entities/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Card' })
class CardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cardNumber: string;

  @Column()
  cardHolder: string;

  @Column()
  cvv: string;

  @Column()
  expirationDate: string;

  @Column()
  lastFourDigits: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.addresses)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;
}

export default CardEntity;
