import { Module } from '@nestjs/common';
import { CartItemsService } from './services/cart-items.service';

@Module({
  providers: [CartItemsService]
})
export class CartItemsModule {}
