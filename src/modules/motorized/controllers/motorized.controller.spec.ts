import { Test, TestingModule } from '@nestjs/testing';
import { MotorizedController } from './motorized.controller';

describe('MotorizedController', () => {
  let controller: MotorizedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotorizedController],
    }).compile();

    controller = module.get<MotorizedController>(MotorizedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
