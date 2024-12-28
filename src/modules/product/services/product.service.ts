import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ProductEntity from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(body: CreateProductDto): Promise<ProductEntity> {
    return this.productRepository.save(body);
  }

  async findAll(): Promise<ProductEntity[]> {
    return this.productRepository.find();
  }

  async update(id: number, body: UpdateProductDto): Promise<ProductEntity> {
    const findProduct = await this.productRepository.findOne({
      where: { id: id },
    });

    if (!findProduct) throw new NotFoundException('El producto no existe');

    const data = this.productRepository.create({ ...body });
    return this.productRepository.save(data);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }

  async findById(id: number): Promise<ProductEntity> {
    return this.productRepository.findOne({ where: { id: id } });
  }
}