import { CreateOptionValueDto } from '@/modules/option-value/dtos/optionValue.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

class CreateOptionReqDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['multiple', 'single', 'quantity'])
  type: string;

  @ApiProperty({
    type: [CreateOptionValueDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOptionValueDto)
  optionsValues: CreateOptionValueDto[];
}

export default CreateOptionReqDto;
