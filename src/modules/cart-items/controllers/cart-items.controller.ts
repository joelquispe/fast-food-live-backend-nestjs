import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartItemsService } from '../services/cart-items.service';
import { CartItemReqDto } from '../dtos/cart_item_req.dto';
import { CartItemRespDto } from '../dtos/cart_item_resp.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateCartItemRespDto } from '../dtos';
import { CartItemOptionsEntity } from '../entities';

@ApiBearerAuth()
@ApiTags('Cart Items')
@Controller('cart-items')
export class CartItemsController {
  constructor(private readonly cartItemService: CartItemsService) {}

  @Post()
  create(@Body() body: CartItemReqDto): Promise<CreateCartItemRespDto> {
    return this.cartItemService.create(body);
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<CartItemRespDto> {
    return this.cartItemService.cartItemFindById(id);
  }

  @Get('options')
  findAll(): Promise<CartItemOptionsEntity[]> {
    return this.cartItemService.cartItemOptionsFindAll();
  }
}
