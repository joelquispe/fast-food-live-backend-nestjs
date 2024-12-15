import { Module } from '@nestjs/common';
import { OptionsService } from './services/options.service';
import { OptionsController } from './controllers/options.controller';

@Module({
  providers: [OptionsService],
  controllers: [OptionsController]
})
export class OptionsModule {}
