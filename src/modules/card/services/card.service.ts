import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CardEntity from '../entities/card.entity';
import { Repository } from 'typeorm';
import { CreateCardDto } from '../dtos/card.dto';

import { EncryptionService } from 'src/core/services/encryption/encryption.service';
import CardResponseDto from '../dtos/create_card_response.dto';
import { plainToInstance } from 'class-transformer';
import { CustomerService } from '@/modules/customer/services/customer.service';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private readonly cardRepository: Repository<CardEntity>,
    private readonly customerService: CustomerService,
    private readonly encryptionService: EncryptionService,
  ) {}

  async findAll(): Promise<CardEntity[]> {
    return this.cardRepository.find();
  }

  async findById(id: number): Promise<CardEntity> {
    const result = await this.cardRepository.findOne({ where: { id } });
    result.cardNumber = this.encryptionService.decrypt(result.cardNumber);
    result.cvv = this.encryptionService.decrypt(result.cvv);
    if (!result) throw new NotFoundException('No se encontro la tarjeta');

    return result;
  }

  async delete(id: number): Promise<void> {
    this.cardRepository.delete({ id });
  }

  async save(body: CreateCardDto): Promise<CardResponseDto> {
    const customer = await this.customerService.findOne(body.customer_id);
    if (!customer) throw new NotFoundException('No se encontro el usuario');
    const encryptedCardNumber = this.encryptionService.encrypt(body.cardNumber);
    const encryptedCVV = this.encryptionService.encrypt(body.cvv);

    const cardEntity = this.cardRepository.create({
      ...body,
      cardNumber: encryptedCardNumber,
      cvv: encryptedCVV,
      customer,
    });

    // Guardar en la base de datos y retornar la tarjeta creada
    const savedCard = await this.cardRepository.save(cardEntity);

    // Convertir al DTO antes de devolver
    return plainToInstance(CardResponseDto, savedCard, {
      excludeExtraneousValues: true,
    });
  }

  async update() {}
}
