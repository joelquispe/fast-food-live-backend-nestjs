import { Module } from '@nestjs/common';
import { OrderDetailService } from './services/order-detail.service';
import { OrderDetailController } from './controllers/order-detail.controller';

@Module({
  providers: [OrderDetailService],
  controllers: [OrderDetailController],
})
export class OrderDetailModule {}
