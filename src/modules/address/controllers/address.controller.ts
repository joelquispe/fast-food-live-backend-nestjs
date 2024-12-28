import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import AddressEntity from '../entities/address.entity';
import { AddressCreateDto, AddressUpdateDto } from '../dtos/address.dto';
import { AddressService } from '../services/address.service';
import CreateAddressResponseDto from '../dtos/create_address_response.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async findAll(): Promise<AddressEntity[]> {
    return this.addressService.findAll();
  }
  @Post()
  async save(
    @Body() body: AddressCreateDto,
  ): Promise<CreateAddressResponseDto> {
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
