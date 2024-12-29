import { forwardRef, Module } from '@nestjs/common';
import { OptionValueController } from './controllers/option-value/option-value.controller';
import { OptionValueService } from './services/option-value/option-value.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import OptionValueEntity from './entities/optionValue.entity';
import { OptionModule } from '../option/option.module';

@Module({
  imports: [
    forwardRef(() => OptionModule),
    TypeOrmModule.forFeature([OptionValueEntity]),
  ],
  providers: [OptionValueService],
  controllers: [OptionValueController],
  exports: [OptionValueService],
})
export class OptionValueModule {}
