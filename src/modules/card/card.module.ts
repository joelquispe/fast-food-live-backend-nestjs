import { Module } from '@nestjs/common';
import { CardService } from './services/card.service';
import { CardController } from './controllers/card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import CardEntity from './entities/card.entity';
import { CustomersModule } from '../customers/customers.module';
import { EncryptionService } from 'src/core/services/encryption/encryption.service';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity]), CustomersModule],
  providers: [CardService, EncryptionService],
  controllers: [CardController],
})
export class CardModule {}
