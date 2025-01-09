import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailOptionController } from './order-detail-option.controller';

describe('OrderDetailOptionController', () => {
  let controller: OrderDetailOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderDetailOptionController],
    }).compile();

    controller = module.get<OrderDetailOptionController>(OrderDetailOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
