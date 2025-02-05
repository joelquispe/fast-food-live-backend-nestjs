import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CartEntity from '../entities/cart.entity';
import { Repository } from 'typeorm';
import { CartReqDto } from '../dtos/cart_req.dto';
import { CustomerService } from '@/modules/customer/services/customer.service';
import { CartRespDto } from '../dtos/cart_resp.dto';
import { plainToInstance } from 'class-transformer';
import { CartItemRespDto } from '@/modules/cart-items/dtos';

import { CartItemsUtilsService } from '@/core/services/cart-items-utils/cart-items-utils.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    private readonly customerService: CustomerService,

    private readonly cartItemsUtilService: CartItemsUtilsService,
  ) {}

  async create(body: CartReqDto): Promise<CartRespDto> {
    const customer = await this.customerService.findOne(body.customerId);
    if (!customer) throw new NotFoundException('No se encontro el usuario');

    const cart = await this.findByCustomerId(body.customerId);
    if (cart) return cart;
    const createCart = this.cartRepository.create({
      ...body,
      customer,
    });
    const saveCart = await this.cartRepository.save(createCart);
    return plainToInstance(CartRespDto, saveCart, {
      excludeExtraneousValues: true,
    });
  }

  async findByCustomerId(id: number): Promise<CartRespDto> {
    const cart = await this.cartRepository.findOne({
      where: { customer: { id: id } },
    });
    return plainToInstance(CartRespDto, cart, {
      excludeExtraneousValues: true,
    });
  }

  async findById(id: number): Promise<CartRespDto> {
    const cart = await this.cartRepository.findOne({
      where: { id },
      relations: [
        'customer',
        'cartItems',
        'cartItems.product',
        'cartItems.cartItemOptions',
        'cartItems.cartItemOptions.cartItemOptionsValues',
      ],
    });
    const cartResp: CartRespDto = {
      id: cart.id,
      customer_id: cart.customerId,
      items: [],
    };
    for (const item of cart.cartItems) {
      const cartItemResp: CartItemRespDto = {
        id: item.id,
        total: item.total,
        quantity: item.quantity,
        cart_id: item.cartId,
        product_id: item.productId,
        name: item.product.name,
        description: item.product.description,
        price: item.product.price,
        image: item.product.image,
        options: [],
      };

      const optionWithDetails =
        await this.cartItemsUtilService.formattedOptions(item.cartItemOptions);

      cartItemResp.options = optionWithDetails;
      cartResp.items.push(cartItemResp);
    }

    return cartResp;
  }
}
