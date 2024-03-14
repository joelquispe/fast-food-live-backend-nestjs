import { Module } from '@nestjs/common';
import { MotorizedService } from './services/motorized.service';
import { MotorizedController } from './controllers/motorized.controller';

@Module({
  providers: [MotorizedService],
  controllers: [MotorizedController]
})
export class MotorizedModule {}
