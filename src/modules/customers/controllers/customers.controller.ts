import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import CustomerCreateDto from '../dtos/customer.dto';
import { CustomerEntity } from '../entities/customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get('/')
  async getAll(): Promise<CustomerEntity[]> {
    return await this.customersService.findAll();
  }

  @Post()
  async save(@Body() body: CustomerCreateDto): Promise<CustomerEntity> {
    return await this.customersService.save(body);
  }
}
