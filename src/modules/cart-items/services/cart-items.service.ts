import { Injectable, NotFoundException } from '@nestjs/common';
import { CartItemReqDto } from '../dtos/cart_item_req.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ProductService } from '@/modules/product/services/product.service';
import { CartService } from '@/modules/cart/services/cart.service';

import { CartItemOptionReqDto } from '../dtos/cart_item_option_req.dto';
import { CartItemOptionValueReqDto } from '../dtos/cart_item_option_value.dto';

import { OptionValueService } from '@/modules/option-value/services/option-value/option-value.service';
import { plainToInstance } from 'class-transformer';
import { CartItemRespDto, CreateCartItemRespDto } from '../dtos';
import {
  CartItemEntity,
  CartItemOptionsEntity,
  CartItemOptionsValuesEntity,
} from '../entities';
import { OptionService } from '@/modules/option/services/option.service';
import { CartItemsUtilsService } from '@/core/services/cart-items-utils/cart-items-utils.service';

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
    private readonly optionService: OptionService,
    private readonly cartItemsUtilService: CartItemsUtilsService,
  ) {}

  async create(body: CartItemReqDto): Promise<CreateCartItemRespDto> {
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

    const cartItem = await this.cartItemRepository.save(item);

    for (const cartItemOption of body.options) {
      this.createItemOption(cartItem.id, cartItemOption);
    }

    return plainToInstance(CreateCartItemRespDto, cartItem, {
      excludeExtraneousValues: true,
    });
  }

  // buscar item por id
  async cartItemFindById(id: number): Promise<CartItemRespDto> {
    const item = await this.cartItemRepository.findOne({
      where: { id },
      relations: [
        'cart',
        'product',
        'cartItemOptions',
        'cartItemOptions.cartItemOptionsValues',
      ],
    });

    if (!item) {
      throw new Error('No existe el producto en el carrito de compras');
    }

    const {
      id: itemId,
      total,
      quantity,
      cart,
      product,
      cartItemOptions,
    } = item;

    const cartItemResp: CartItemRespDto = {
      id: itemId,
      total,
      quantity,
      cart_id: cart.id,
      product_id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      options: [],
    };

    // Obtener todas las opciones en paralelo
    const optionsWithDetails =
      await this.cartItemsUtilService.formattedOptions(cartItemOptions);

    cartItemResp.options = optionsWithDetails;

    return cartItemResp;
  }

  async cartItemOptionFindById(id: number): Promise<CartItemOptionsEntity> {
    return this.cartItemOptionRepository.findOne({ where: { id } });
  }

  async createItemOption(cartItemId: number, body: CartItemOptionReqDto) {
    const cartItem = await this.cartItemFindById(cartItemId);
    if (!cartItem) throw new NotFoundException('No se encontro el producto');
    const option = await this.optionService.findById(body.optionId);
    const itemOption = this.cartItemOptionRepository.create({
      ...body,
      cartItem,
      option,
    });
    const saveItemOption = await this.cartItemOptionRepository.save(itemOption);

    for (const optionValue of body.optionValues) {
      this.createItemOptionValue(saveItemOption.id, optionValue);
    }
    return saveItemOption;
  }

  async createItemOptionValue(
    cartItemOptionId: number,
    body: CartItemOptionValueReqDto,
  ) {
    const cartItemOption = await this.cartItemOptionFindById(cartItemOptionId);
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

  async cartItemOptionsFindAll(): Promise<CartItemOptionsEntity[]> {
    return this.cartItemOptionRepository.find();
  }
}
