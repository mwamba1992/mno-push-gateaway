import { Test, TestingModule } from '@nestjs/testing';
import { C2bService } from './c2b.service';

describe('C2bService', () => {
  let service: C2bService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [C2bService],
    }).compile();

    service = module.get<C2bService>(C2bService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
