import { Test, TestingModule } from '@nestjs/testing';
import { OptionValueController } from './option-value.controller';

describe('OptionValueController', () => {
  let controller: OptionValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionValueController],
    }).compile();

    controller = module.get<OptionValueController>(OptionValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
