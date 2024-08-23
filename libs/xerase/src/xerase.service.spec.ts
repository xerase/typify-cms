import { Test, TestingModule } from '@nestjs/testing';
import { XeraseService } from './xerase.service';

describe('XeraseService', () => {
  let service: XeraseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XeraseService],
    }).compile();

    service = module.get<XeraseService>(XeraseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
