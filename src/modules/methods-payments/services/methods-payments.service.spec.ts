import { Test, TestingModule } from '@nestjs/testing';
import { MethodsPaymentsService } from './methods-payments.service';

describe('MethodsPaymentsService', () => {
  let service: MethodsPaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MethodsPaymentsService],
    }).compile();

    service = module.get<MethodsPaymentsService>(MethodsPaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
