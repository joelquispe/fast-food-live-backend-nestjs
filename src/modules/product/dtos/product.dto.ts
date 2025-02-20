import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CreateProductDto {
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
  @CreateDateColumn()
  createAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updateAt: Date;

  @ApiProperty()
  @IsArray()
  @IsInt({ each: true })
  optionIds: number[];
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
