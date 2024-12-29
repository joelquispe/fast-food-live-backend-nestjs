import { forwardRef, Module } from '@nestjs/common';
import { OptionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import OptionEntity from './entities/option.entity';
import { OptionValueModule } from '../option-value/option-value.module';

@Module({
  imports: [
    forwardRef(() => OptionValueModule),
    TypeOrmModule.forFeature([OptionEntity]),
  ],
  providers: [OptionService],
  controllers: [OptionController],
  exports: [OptionService],
})
export class OptionModule {}
