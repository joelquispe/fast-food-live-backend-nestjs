import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import OptionEntity from '../entities/option.entity';
import { OptionService } from '../services/option.service';
import CreateOptionReqDto from '../dtos/create_option_req.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OptionRespDoc } from '../dtos/docs/option_resp_doc.dto';
import { OptionFindAllRespDoc } from '../dtos/docs/option_findAll_resp_doc.dto';
import DataResp from '@/core/dtos/data_resp.dto';

@ApiBearerAuth()
@ApiTags('option')
@Controller('option')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @ApiOkResponse({
    type: OptionFindAllRespDoc,
  })
  @Get()
  async findAll(): Promise<OptionEntity[]> {
    return this.optionService.findAll();
  }

  @ApiCreatedResponse({
    type: OptionRespDoc,
  })
  @Post()
  async create(@Body() body: CreateOptionReqDto): Promise<OptionEntity> {
    return this.optionService.create(body);
  }

  @ApiOkResponse({
    type: OptionRespDoc,
  })
  @Get(':id')
  async findById(@Param('id') id: number): Promise<OptionEntity> {
    return this.optionService.findById(id);
  }
  @ApiOkResponse({
    type: DataResp,
  })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.optionService.delete(id);
  }
}
