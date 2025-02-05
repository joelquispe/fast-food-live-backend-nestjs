import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from '../services/cart.service';
import { CartRespDto } from '../dtos/cart_resp.dto';
import { CartReqDto } from '../dtos/cart_req.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() body: CartReqDto): Promise<CartRespDto> {
    return this.cartService.create(body);
  }

  // @Get()
  // async findAll(): Promise<CartRespDto[]> {
  //   return this.cartService.findAll();
  // }

  @Get('customer/:id')
  async findByCustomerId(@Param('id') id: number): Promise<CartRespDto> {
    return this.cartService.findByCustomerId(id);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<CartRespDto> {
    return this.cartService.findById(id);
  }
}
