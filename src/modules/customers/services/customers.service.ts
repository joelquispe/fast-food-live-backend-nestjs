import { Injectable } from '@nestjs/common';
import { CustomerEntity } from '../entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRP: Repository<CustomerEntity>,
  ) {}

  async getAll() {
    return await this.customerRP.find();
  }
}
