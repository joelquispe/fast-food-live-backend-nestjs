import { Controller, Get } from '@nestjs/common';
import OptionValueEntity from '../../entities/optionValue.entity';
import { OptionValueService } from '../../services/option-value/option-value.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('option-value')
@Controller('option-value')
export class OptionValueController {
  constructor(private readonly optionValueService: OptionValueService) {}
  @Get()
  async findAll(): Promise<OptionValueEntity[]> {
    return this.optionValueService.findAll();
  }
}
