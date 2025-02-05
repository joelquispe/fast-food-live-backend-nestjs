import { Module } from '@nestjs/common';
import { CartItemsService } from './services/cart-items.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartModule } from '../cart/cart.module';
import { ProductModule } from '../product/product.module';
import { CartItemsController } from './controllers/cart-items.controller';
import { OptionValueModule } from '../option-value/option-value.module';
import {
  CartItemEntity,
  CartItemOptionsEntity,
  CartItemOptionsValuesEntity,
} from './entities';
import { OptionModule } from '../option/option.module';
import { UtilsModule } from '@/core/services/utils.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CartItemEntity,
      CartItemOptionsValuesEntity,
      CartItemOptionsEntity,
    ]),
    CartModule,
    ProductModule,
    OptionValueModule,
    OptionModule,
    UtilsModule,
  ],
  providers: [CartItemsService],
  exports: [CartItemsService],
  controllers: [CartItemsController],
})
export class CartItemsModule {}
