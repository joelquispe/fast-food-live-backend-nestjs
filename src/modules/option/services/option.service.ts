import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import OptionEntity from '../entities/option.entity';
import { In, Repository } from 'typeorm';
import { OptionValueService } from '../../option-value/services/option-value/option-value.service';
import CreateOptionReqDto from '../dtos/create_option_req.dto';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionEntity)
    private readonly optionRepository: Repository<OptionEntity>,
    @Inject(forwardRef(() => OptionValueService))
    private readonly optionValueService: OptionValueService,
  ) {}

  async create(body: CreateOptionReqDto): Promise<OptionEntity> {
    const option = this.optionRepository.create({
      title: body.title,
      type: body.type,
    });
    const saveOption = await this.optionRepository.save(option);

    console.log(body.optionsValues);
    for (const value of body.optionsValues) {
      this.optionValueService.create({
        ...value,
        optionId: saveOption.id,
      });
    }

    return saveOption;
  }

  async findByIds(ids: number[]): Promise<OptionEntity[]> {
    return this.optionRepository.findBy({ id: In(ids) });
  }

  async findById(id: number): Promise<OptionEntity> {
    return this.optionRepository.findOne({
      where: { id: id },
      relations: ['optionsValues'],
    });
  }
}
