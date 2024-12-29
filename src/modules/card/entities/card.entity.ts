import { CustomerEntity } from 'src/modules/customer/entities/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cards' })
class CardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'card_number' })
  cardNumber: string;

  @Column({ name: 'card_holder' })
  cardHolder: string;

  @Column()
  cvv: string;

  @Column({ name: 'expiration_date' })
  expirationDate: string;

  @Column({ name: 'last_four_digits' })
  lastFourDigits: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.addresses)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;
}

export default CardEntity;
