import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigcontabilService } from './configcontabil.service';
import { ConfigcontabilController } from './configcontabil.controller';
import { Configcontabil } from './entities/configcontabil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Configcontabil])],
  controllers: [ConfigcontabilController],
  providers: [ConfigcontabilService],
})
export class ConfigcontabilModule {}
