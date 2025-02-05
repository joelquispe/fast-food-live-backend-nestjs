import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AddressEntity from '../entities/address.entity';
import { Repository } from 'typeorm';
import { CustomerService } from '@/modules/customer/services/customer.service';
import { AddressCreateDto, AddressUpdateDto } from '../dtos/address.dto';
import CreateAddressResponseDto from '../dtos/create_address_response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly customerService: CustomerService,
  ) {}

  async findAll(): Promise<AddressEntity[]> {
    return this.addressRepository.find();
  }

  async create(body: AddressCreateDto): Promise<CreateAddressResponseDto> {
    const customer = await this.customerService.findOne(body.customer_id);
    if (!customer)
      throw new BadRequestException('No se pudo crear la dirección');

    const data = new AddressEntity({ ...body, customer });
    const saveData = await this.addressRepository.save(data);
    return plainToInstance(CreateAddressResponseDto, saveData, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: number, body: AddressUpdateDto): Promise<AddressEntity> {
    const findAddress = await this.addressRepository.findOne({ where: { id } });

    if (!findAddress) throw new BadRequestException('No se pudo actualizar');

    Object.assign(findAddress, body);

    return this.addressRepository.save(findAddress);
  }

  async delete(id: number): Promise<void> {
    this.addressRepository.delete({ id });
  }
}
