import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import OptionValueEntity from '../../entities/optionValue.entity';
import { Repository } from 'typeorm';
import { CreateOptionValueDto } from '../../dtos/optionValue.dto';
import { OptionService } from '@/modules/option/services/option.service';

@Injectable()
export class OptionValueService {
  constructor(
    @InjectRepository(OptionValueEntity)
    private readonly optionValueRepository: Repository<OptionValueEntity>,
    @Inject(forwardRef(() => OptionService))
    private readonly optionService: OptionService,
  ) {}

  async create(body: CreateOptionValueDto): Promise<OptionValueEntity> {
    const findOption = await this.optionService.findById(body.optionId);

    if (!findOption) throw new NotFoundException('La opción no existe');

    const optionValue = this.optionValueRepository.create({
      ...body,
      option: findOption,
    });

    return this.optionValueRepository.save(optionValue);
  }

  async findById(id: number): Promise<OptionValueEntity> {
    const optionValue = this.optionValueRepository.findOne({
      where: { id: id },
    });

    if (!optionValue)
      throw new NotFoundException('El valor de la opción no existe');
    return optionValue;
  }

  async findAll(): Promise<OptionValueEntity[]> {
    return this.optionValueRepository.find({
      relations: ['option'],
    });
  }
}
