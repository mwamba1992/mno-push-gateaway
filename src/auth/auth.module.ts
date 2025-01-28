import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [UsersModule, PermissionsModule, RolesModule]
})
export class AuthModule {}
