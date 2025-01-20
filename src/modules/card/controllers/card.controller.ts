import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CardService } from '../services/card.service';
import { CreateCardDto } from '../dtos/card.dto';
import CardEntity from '../entities/card.entity';
import CreateCardResponseDto from '../dtos/create_card_response.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import CardRespDoc from '../dtos/docs/card_resp_doc';

@ApiBearerAuth()
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @ApiCreatedResponse({
    type: CardRespDoc,
  })
  @Post()
  async save(@Body() body: CreateCardDto): Promise<CreateCardResponseDto> {
    return this.cardService.save(body);
  }

  @ApiOkResponse({
    type: CardRespDoc,
  })
  @Get(':id')
  async findById(@Param('id') id: number): Promise<CardEntity> {
    return this.cardService.findById(id);
  }
}
