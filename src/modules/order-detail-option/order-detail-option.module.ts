import { Module } from '@nestjs/common';
import { OrderDetailOptionService } from './services/order-detail-option.service';
import { OrderDetailOptionController } from './controllers/order-detail-option.controller';

@Module({
  providers: [OrderDetailOptionService],
  controllers: [OrderDetailOptionController]
})
export class OrderDetailOptionModule {}
