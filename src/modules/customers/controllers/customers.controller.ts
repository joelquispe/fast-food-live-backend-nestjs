import { Controller, Get } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get('/')
  async getAll() {
    return await this.customersService.getAll();
  }
}
