import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CartItemOptionReqDto } from './cart_item_option_req.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CartItemReqDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  total: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cartId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @ApiProperty({
    type: [CartItemOptionReqDto],
  })
  @IsArray()
  @ValidateNested({ each: true }) // Valida que cada elemento del array sea válido según CartItemOptionReqDto
  @Type(() => CartItemOptionReqDto)
  options: CartItemOptionReqDto[];
}
