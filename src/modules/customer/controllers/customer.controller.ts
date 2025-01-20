import { Controller, Get } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CustomerEntity } from 'src/modules/customer/entities/customer.entity';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';

import CustomerRespDoc from '../dtos/docs/customer_resp_doc.dto';

@ApiBearerAuth()
@Controller('customer')
export class CustomerController {
  constructor(private readonly customersService: CustomerService) {}
  @ApiOkResponse({
    type: [CustomerRespDoc],
  })
  @Get('/')
  async getAll(): Promise<CustomerEntity[]> {
    return await this.customersService.findAll();
  }
}
