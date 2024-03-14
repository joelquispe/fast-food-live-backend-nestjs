import { Module } from '@nestjs/common';
import { DeliveriesService } from './services/deliveries.service';
import { DeliveriesController } from './controllers/deliveries.controller';

@Module({
  providers: [DeliveriesService],
  controllers: [DeliveriesController]
})
export class DeliveriesModule {}
