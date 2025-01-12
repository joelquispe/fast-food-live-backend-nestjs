import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ProductRespDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  createAt: Date;

  @ApiProperty()
  updateAt: Date;

  @ApiProperty()
  @IsArray()
  @IsInt({ each: true })
  optionIds: number[];
}
