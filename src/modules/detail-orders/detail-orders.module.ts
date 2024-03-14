import { Module } from '@nestjs/common';
import { DetailOrdersController } from './controllers/detail-orders.controller';
import { DetailOrdersService } from './services/detail-orders.service';

@Module({
  controllers: [DetailOrdersController],
  providers: [DetailOrdersService]
})
export class DetailOrdersModule {}
