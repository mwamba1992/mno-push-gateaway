import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './auth/users.module';
import { GatewayModule } from './gateway/gateway.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, GatewayModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
