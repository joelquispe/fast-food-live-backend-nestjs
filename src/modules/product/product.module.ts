import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ProductEntity from './entities/product.entity';
import { OptionModule } from '../option/option.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), OptionModule],
  providers: [ProductService],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
