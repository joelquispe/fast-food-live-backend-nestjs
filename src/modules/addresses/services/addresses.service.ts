import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AddressEntity from '../entities/address.entity';
import { Repository } from 'typeorm';
import AddressCreateDto from '../dtos/address.dto';
import { CustomersService } from 'src/modules/customers/services/customers.service';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly customerService: CustomersService,
  ) {}

  async findAll() {
    return this.addressRepository.find();
  }

  async save(body: AddressCreateDto) {
    const customer = await this.customerService.findOne(body.customer_id);
    if (!customer)
      throw new BadRequestException('No se pudo guardar la dirección');

    const data = new AddressEntity({ ...body, customer });

    this.addressRepository
      .save(data)
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  }
}
