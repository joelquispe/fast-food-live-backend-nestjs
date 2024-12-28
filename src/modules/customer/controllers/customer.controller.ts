import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CustomerEntity } from 'src/modules/customer/entities/customer.entity';
import CustomerCreateDto from '../dtos/customer.dto';
import CreateCustomerResponseDto from '../dtos/create_customer_response.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customersService: CustomerService) {}
  @Get('/')
  async getAll(): Promise<CustomerEntity[]> {
    return await this.customersService.findAll();
  }

  @Post()
  async save(
    @Body() body: CustomerCreateDto,
  ): Promise<CreateCustomerResponseDto> {
    return await this.customersService.save(body);
  }
}
