import { Test, TestingModule } from '@nestjs/testing';
import { XeraseCmsService } from './xerase-cms.service';

describe('XeraseCmsService', () => {
  let service: XeraseCmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XeraseCmsService],
    }).compile();

    service = module.get<XeraseCmsService>(XeraseCmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
