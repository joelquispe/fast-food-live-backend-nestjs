import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AddressEntity from '../entities/address.entity';
import { Repository } from 'typeorm';
import { CustomersService } from 'src/modules/customers/services/customers.service';
import { AddressCreateDto, AddressUpdateDto } from '../dtos/address.dto';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly customerService: CustomersService,
  ) {}

  async findAll(): Promise<AddressEntity[]> {
    return this.addressRepository.find();
  }

  async save(body: AddressCreateDto): Promise<AddressEntity> {
    const customer = await this.customerService.findOne(body.customer_id);
    if (!customer)
      throw new BadRequestException('No se pudo guardar la dirección');

    const data = new AddressEntity({ ...body, customer });

    return this.addressRepository.save(data);
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
