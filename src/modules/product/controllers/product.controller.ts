import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import ProductEntity from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import ProductRespDoc from '../dtos/docs/product_doc_resp_doc.dto';
import ProductFindAllRespDoc from '../dtos/docs/product_findAll_resp_doc.dto';

@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOkResponse({
    type: ProductRespDoc,
  })
  @Post()
  async create(@Body() body: CreateProductDto): Promise<ProductEntity> {
    return this.productService.create(body);
  }

  @ApiOkResponse({
    type: ProductFindAllRespDoc,
  })
  @Get()
  async findAll(): Promise<ProductEntity[]> {
    return this.productService.findAll();
  }

  @ApiOkResponse({
    type: ProductRespDoc,
  })
  @Get(':id')
  async findById(@Param('id') id: number): Promise<ProductEntity> {
    return this.productService.findById(id);
  }

  @ApiOkResponse({
    type: ProductRespDoc,
  })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: UpdateProductDto,
  ): Promise<ProductEntity> {
    return this.productService.update(id, body);
  }
}
