import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddressesService } from '../services/addresses.service';
import { AddressCreateDto, AddressUpdateDto } from '../dtos/address.dto';
import AddressEntity from '../entities/address.entity';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressService: AddressesService) {}

  @Get()
  async findAll(): Promise<AddressEntity[]> {
    return this.addressService.findAll();
  }
  @Post()
  async save(@Body() body: AddressCreateDto): Promise<AddressEntity> {
    return this.addressService.save(body);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: AddressUpdateDto,
  ): Promise<AddressEntity> {
    return this.addressService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.addressService.delete(id);
  }
}
