import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CartItemOptionValueReqDto } from './cart_item_option_value.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CartItemOptionReqDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  optionId: number;

  @ApiProperty({
    type: [CartItemOptionValueReqDto],
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true }) // Valida que cada elemento del array sea válido según CartItemOptionValueReqDto
  @Type(() => CartItemOptionValueReqDto)
  optionValues: CartItemOptionValueReqDto[];
}
