import { Test, TestingModule } from '@nestjs/testing';
import { DetailOrdersController } from './detail-orders.controller';

describe('DetailOrdersController', () => {
  let controller: DetailOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailOrdersController],
    }).compile();

    controller = module.get<DetailOrdersController>(DetailOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
