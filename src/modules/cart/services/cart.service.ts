import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CartEntity from '../entities/cart.entity';
import { Repository } from 'typeorm';
import { CartReqDto } from '../dtos/cart_req.dto';
import { CartItemsService } from '@/modules/cart-items/services/cart-items.service';
import { CustomerService } from '@/modules/customer/services/customer.service';
import { CartItemReqDto } from '@/modules/cart-items/dtos/cart_item_req.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    private readonly cartItemsService: CartItemsService,
    private readonly customerService: CustomerService,
  ) {}

  async createCart(body: CartReqDto): Promise<CartEntity> {
    const customer = await this.customerService.findOne(body.customerId);
    if (!customer) throw new NotFoundException('No se encontro el usuario');

    const cart = await this.findByCustomerId(body.customerId);
    if (!!cart) return cart;
    const createCart = this.cartRepository.create({
      ...body,
      customer,
    });
    return this.cartRepository.save(createCart);
  }

  async addItemToCart(body: CartItemReqDto): Promise<void> {
    await this.cartItemsService.create(body);
  }
  async findByCustomerId(id: number): Promise<CartEntity> {
    return this.cartRepository.findOne({ where: { customer: { id: id } } });
  }

  async findById(id: number): Promise<CartEntity> {
    return this.cartRepository.findOne({ where: { id } });
  }
}
