import { Module } from '@nestjs/common';
import { MethodsPaymentsService } from './services/methods-payments.service';
import { MethodsPaymentsController } from './controllers/methods-payments.controller';

@Module({
  providers: [MethodsPaymentsService],
  controllers: [MethodsPaymentsController]
})
export class MethodsPaymentsModule {}
