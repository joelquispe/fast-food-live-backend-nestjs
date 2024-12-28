import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from '../entities/customer.entity';
import { Repository } from 'typeorm';
import CustomerCreateDto from '../dtos/customer.dto';
import { hash } from 'bcrypt';
import CreateCustomerResponseDto from '../dtos/create_customer_response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CustomerService {
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

  async save(body: CustomerCreateDto): Promise<CreateCustomerResponseDto> {
    const { password } = body;

    const hashPassword = await hash(password, 10);
    const saveCustomer = await this.customerRepository.save({
      ...body,
      password: hashPassword,
    });
    return plainToInstance(CreateCustomerResponseDto, saveCustomer, {
      excludeExtraneousValues: true,
    });
  }
}
