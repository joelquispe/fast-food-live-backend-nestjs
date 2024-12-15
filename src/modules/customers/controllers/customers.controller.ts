import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import CustomerCreateDto from '../dtos/customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get('/')
  async getAll() {
    return await this.customersService.getAll();
  }

  @Post()
  async save(@Body() body: CustomerCreateDto) {
    return await this.customersService.save(body);
  }
}
