import { Test, TestingModule } from '@nestjs/testing';
import { MethodsPaymentsController } from './methods-payments.controller';

describe('MethodsPaymentsController', () => {
  let controller: MethodsPaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MethodsPaymentsController],
    }).compile();

    controller = module.get<MethodsPaymentsController>(MethodsPaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
