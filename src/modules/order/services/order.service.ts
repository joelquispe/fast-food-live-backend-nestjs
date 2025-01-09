import { Inject, Injectable } from '@nestjs/common';
import OrderEntity from '../entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @Inject(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}
}
