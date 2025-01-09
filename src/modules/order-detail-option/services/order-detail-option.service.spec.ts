import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailOptionService } from './order-detail-option.service';

describe('OrderDetailOptionService', () => {
  let service: OrderDetailOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderDetailOptionService],
    }).compile();

    service = module.get<OrderDetailOptionService>(OrderDetailOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
