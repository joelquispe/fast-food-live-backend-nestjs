import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddressesService } from '../services/addresses.service';
import AddressCreateDto from '../dtos/address.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressService: AddressesService) {}

  @Get()
  async findAll() {
    return this.addressService.findAll();
  }
  @Post()
  async save(@Body() body: AddressCreateDto) {
    return this.addressService.save(body);
  }
}
