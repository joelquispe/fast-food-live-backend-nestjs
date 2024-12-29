import { CreateOptionValueDto } from '@/modules/option-value/dtos/optionValue.dto';
import { IsArray, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['multiple', 'single', 'quantity'])
  type: string;

  @IsArray()
  optionsValue: CreateOptionValueDto[];
}
