import { Module } from '@nestjs/common';
import { C2bModule } from './c2b/c2b.module';

@Module({
  imports: [C2bModule]
})
export class GatewayModule {}
