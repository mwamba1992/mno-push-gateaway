import { Module } from '@nestjs/common';
import { C2bService } from './c2b.service';
import { C2bController } from './c2b.controller';

@Module({
  controllers: [C2bController],
  providers: [C2bService],
})
export class C2bModule {}
