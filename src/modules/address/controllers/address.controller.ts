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

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @ApiBearerAuth()
  @ApiOkResponse({
    type: DataResp<AddressEntity[]>,
  })
  @Get()
  async findAll(): Promise<AddressEntity[]> {
    return this.addressService.findAll();
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    schema: {
      example: {
        data: {
          id: 1,
          street: 'Calle Ficticia 123',
          country: 'FicticiaLand',
          zipCode: '12345',
          reference: 'Near the big park',
          city: 'Ciudad Ficticia',
          state: 'FicticiaState',
          latitude: 19.432608,
          longitude: -99.133209,
          customer_id: 101,
        },
        error: null, // Si no hay error
        statusCode: 201,
        path: '/address/save',
        timestamp: new Date().toISOString(),
      },
    },
  })
  @Post()
  async save(
    @Body() body: AddressCreateDto,
  ): Promise<CreateAddressResponseDto> {
    return this.addressService.save(body);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    schema: {
      example: {
        data: {
          id: 1,
          street: 'Calle Ficticia 123',
          country: 'FicticiaLand',
          zipCode: '12345',
          reference: 'Near the big park',
          city: 'Ciudad Ficticia',
          state: 'FicticiaState',
          latitude: 19.432608,
          longitude: -99.133209,
          customer_id: 101,
        },
        error: null, // Si no hay error
        statusCode: 201,
        path: '/address/save',
        timestamp: new Date().toISOString(),
      },
    },
  })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: AddressUpdateDto,
  ): Promise<AddressEntity> {
    return this.addressService.update(id, body);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    type: DataResp,
  })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.addressService.delete(id);
  }
}
