import { Module } from '@nestjs/common';
import { CardService } from './services/card.service';
import { CardController } from './controllers/card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import CardEntity from './entities/card.entity';

import { EncryptionService } from 'src/core/services/encryption/encryption.service';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity]), CustomerModule],
  providers: [CardService, EncryptionService],
  controllers: [CardController],
})
export class CardModule {}
