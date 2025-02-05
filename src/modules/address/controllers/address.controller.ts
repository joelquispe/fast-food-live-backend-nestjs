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
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import DataResp from '@/core/dtos/data_resp.dto';
import AddressRespDoc from '../dtos/docs/address_resp_doc.dto';
import AddressFindAllRespDoc from '../dtos/docs/address_findAll_resp_doc.dto';

@ApiBearerAuth()
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @ApiBearerAuth()
  @ApiOkResponse({
    type: AddressFindAllRespDoc,
  })
  @Get()
  async findAll(): Promise<AddressEntity[]> {
    return this.addressService.findAll();
  }

  @ApiCreatedResponse({
    type: AddressRespDoc,
  })
  @Post()
  async create(
    @Body() body: AddressCreateDto,
  ): Promise<CreateAddressResponseDto> {
    return this.addressService.create(body);
  }

  @ApiCreatedResponse({
    type: AddressRespDoc,
  })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: AddressUpdateDto,
  ): Promise<AddressEntity> {
    return this.addressService.update(id, body);
  }

  @ApiOkResponse({
    type: DataResp,
  })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.addressService.delete(id);
  }
}
