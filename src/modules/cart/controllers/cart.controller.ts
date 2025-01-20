import { Controller, Post } from '@nestjs/common';
import { CartService } from '../services/cart.service';
import { CartRespDto } from '../dtos/cart_resp.dto';
import { CartReqDto } from '../dtos/cart_req.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async createCart(body: CartReqDto): Promise<CartRespDto> {
    return this.cartService.createCart(body);
  }
}
