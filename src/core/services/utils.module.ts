import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption/encryption.service';
import { OptionModule } from '@/modules/option/option.module';
import { OptionValueModule } from '@/modules/option-value/option-value.module';
import { CartItemsUtilsService } from './cart-items-utils/cart-items-utils.service';

@Module({
  imports: [OptionModule, OptionValueModule],
  providers: [EncryptionService, CartItemsUtilsService],
  exports: [EncryptionService, CartItemsUtilsService],
})
export class UtilsModule {}
