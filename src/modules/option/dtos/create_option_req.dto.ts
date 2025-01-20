import { CreateOptionValueDto } from '@/modules/option-value/dtos/optionValue.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsIn, IsNotEmpty, IsString } from 'class-validator';

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

  @ApiProperty()
  @IsArray()
  optionsValues: CreateOptionValueDto[];
}

export default CreateOptionReqDto;
