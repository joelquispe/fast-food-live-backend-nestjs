import { Module } from '@nestjs/common';
import { AddressController } from './controllers/address.controller';
import { AddressService } from './services/address.service';
import { CustomerModule } from '../customer/customer.module';
import AddressEntity from './entities/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), CustomerModule],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
