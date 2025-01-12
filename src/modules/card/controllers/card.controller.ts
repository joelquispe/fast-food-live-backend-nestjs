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

@ApiBearerAuth()
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @ApiCreatedResponse({
    schema: {
      example: {
        data: {
          id: 1,
          cardNumber: '1234567812345678',
          cardHolder: 'John Doe',
          cvv: '123',
          expirationDate: '12/25',
          lastFourDigits: '5678',
          customer_id: 1,
        },
        error: null,
        statusCode: 201,
        path: '/cards',
        timestamp: new Date().toISOString(),
      },
    },
  })
  @Post()
  async save(@Body() body: CreateCardDto): Promise<CreateCardResponseDto> {
    return this.cardService.save(body);
  }

  @ApiOkResponse({
    schema: {
      example: {
        data: {
          id: 1,
          cardNumber: '1234567812345678',
          cardHolder: 'John Doe',
          cvv: '123',
          expirationDate: '12/25',
          lastFourDigits: '5678',
          customer_id: 1,
        },
        error: null,
        statusCode: 201,
        path: '/cards',
        timestamp: new Date().toISOString(),
      },
    },
  })
  @Get(':id')
  async findById(@Param('id') id: number): Promise<CardEntity> {
    return this.cardService.findById(id);
  }
}
