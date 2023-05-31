import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SecurityModule } from './security/security.module';
import { JwtInterceptor } from './shared/jwtInterceptor';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    SecurityModule
  ],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: JwtInterceptor,
  },],
})
export class AppModule { }

