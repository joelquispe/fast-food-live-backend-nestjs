import { Injectable } from '@nestjs/common';
import { CustomerEntity } from '../entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CustomerCreateDto from '../dtos/customer.dto';
import { hash } from 'bcrypt';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async findAll(): Promise<CustomerEntity[]> {
    return await this.customerRepository.find();
  }

  async findByEmail(email: string): Promise<CustomerEntity> {
    return await this.customerRepository.findOne({
      where: { email: email },
    });
  }

  async findOne(id: number): Promise<CustomerEntity> {
    return await this.customerRepository.findOne({
      where: { id },
    });
  }

  async save(body: CustomerCreateDto): Promise<CustomerEntity> {
    const { password } = body;

    const hashPassword = await hash(password, 10);

    return this.customerRepository.save({ ...body, password: hashPassword });
  }
}
