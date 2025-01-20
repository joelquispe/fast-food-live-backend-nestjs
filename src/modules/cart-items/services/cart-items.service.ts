import { Injectable, NotFoundException } from '@nestjs/common';
import { CartItemReqDto } from '../dtos/cart_item_req.dto';
import { InjectRepository } from '@nestjs/typeorm';
import CartItemEntity from '../entities/cart_item.entity';
import { Repository } from 'typeorm';
import { ProductService } from '@/modules/product/services/product.service';
import { CartService } from '@/modules/cart/services/cart.service';
import CartItemOptionsEntity from '../entities/cart_item_options.entity';
import { CartItemOptionReqDto } from '../dtos/cart_item_option_req.dto';
import { CartItemOptionValueReqDto } from '../dtos/cart_item_option_value.dto';
import CartItemOptionsValuesEntity from '../entities/cart_item_options_values.entity';
import { OptionValueService } from '@/modules/option-value/services/option-value/option-value.service';

@Injectable()
export class CartItemsService {
  constructor(
    @InjectRepository(CartItemEntity)
    private readonly cartItemRepository: Repository<CartItemEntity>,
    @InjectRepository(CartItemOptionsEntity)
    private readonly cartItemOptionRepository: Repository<CartItemOptionsEntity>,
    @InjectRepository(CartItemOptionsValuesEntity)
    private readonly cartItemOptionValuesRepository: Repository<CartItemOptionsValuesEntity>,
    private readonly productService: ProductService,
    private readonly cartService: CartService,
    private readonly optionValueService: OptionValueService,
  ) {}
  async create(body: CartItemReqDto) {
    const cart = await this.cartService.findById(body.cartId);

    if (!cart)
      throw new NotFoundException('No se encontro el carrito de compras');

    const product = await this.productService.findById(body.productId);
    if (!product) throw new NotFoundException('No se encontro el producto');
    const item = this.cartItemRepository.create({
      ...body,
      product,
      cart,
    });

    return this.cartItemRepository.save(item);
  }
  async cartItemfindById(id: number): Promise<CartItemEntity> {
    return this.cartItemRepository.findOne({ where: { id } });
  }

  async cartItemOptionfindById(id: number): Promise<CartItemOptionsEntity> {
    return this.cartItemOptionRepository.findOne({ where: { id } });
  }

  async createItemOption(body: CartItemOptionReqDto) {
    const cartItem = await this.cartItemfindById(body.cartItemId);
    if (!cartItem) throw new NotFoundException('No se encontro el producto');
    const itemOption = this.cartItemOptionRepository.create({
      ...body,
      cartItem,
    });
    return this.cartItemOptionRepository.save(itemOption);
  }

  async createItemOptionValue(body: CartItemOptionValueReqDto) {
    const cartItemOption = await this.cartItemOptionfindById(
      body.cartItemOptionId,
    );
    if (!cartItemOption)
      throw new NotFoundException('No se encontro la opción');

    const optionValue = await this.optionValueService.findById(
      body.optionValueId,
    );
    if (!optionValue)
      throw new NotFoundException('No se encontro el valor de la ópcion');

    const itemOptionValue = this.cartItemOptionValuesRepository.create({
      ...body,
      cartItemOptions: cartItemOption,
      optionValue,
    });
    return this.cartItemOptionValuesRepository.save(itemOptionValue);
  }
}
