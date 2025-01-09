import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import OptionEntity from '../entities/option.entity';
import { OptionService } from '../services/option.service';
import CreateOptionReqDto from '../dtos/create_option_req.dto';

@Controller('option')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Get()
  async findAll(): Promise<OptionEntity[]> {
    return this.optionService.findAll();
  }

  @Post()
  async create(@Body() body: CreateOptionReqDto): Promise<OptionEntity> {
    return this.optionService.create(body);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<OptionEntity> {
    return this.optionService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.optionService.delete(id);
  }
}
