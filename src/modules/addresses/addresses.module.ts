import { Module } from '@nestjs/common';
import { AddressesService } from './services/addresses.service';
import { AddressesController } from './controllers/addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import AddressEntity from './entities/address.entity';
import { CustomersModule } from '../customers/customers.module';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), CustomersModule],
  providers: [AddressesService],
  controllers: [AddressesController],
})
export class AddressesModule {}
