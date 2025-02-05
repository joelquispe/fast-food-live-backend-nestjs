import { Module } from '@nestjs/common';
import { CartService } from './services/cart.service';
import { CartController } from './controllers/cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import CartEntity from './entities/cart.entity';
import { CustomerModule } from '../customer/customer.module';
import { UtilsModule } from '@/core/services/utils.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartEntity]),
    CustomerModule,
    UtilsModule,
  ],
  providers: [CartService],
  exports: [CartService],
  controllers: [CartController],
})
export class CartModule {}
