import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SecurityController } from './security/security.controller';
import { SecurityService } from './security/security.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [SecurityController],
  providers: [SecurityService],
})
export class AppModule {}

