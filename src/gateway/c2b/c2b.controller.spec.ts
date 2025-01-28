import { Test, TestingModule } from '@nestjs/testing';
import { C2bController } from './c2b.controller';
import { C2bService } from './c2b.service';

describe('C2bController', () => {
  let controller: C2bController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [C2bController],
      providers: [C2bService],
    }).compile();

    controller = module.get<C2bController>(C2bController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
