import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import ProductEntity from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() body: CreateProductDto): Promise<ProductEntity> {
    return this.productService.create(body);
  }

  @Get()
  async findAll(): Promise<ProductEntity[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<ProductEntity> {
    return this.productService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: UpdateProductDto,
  ): Promise<ProductEntity> {
    return this.productService.update(id, body);
  }
}
