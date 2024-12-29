import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOptionValueDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  optionId: number;
}
