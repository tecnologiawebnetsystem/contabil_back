import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModulocontabilService } from './modulocontabil.service';
import { ModulocontabilController } from './modulocontabil.controller';
import { Modulocontabil } from './entities/modulocontabil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Modulocontabil])],
  controllers: [ModulocontabilController],
  providers: [ModulocontabilService],
})
export class ModulocontabilModule {}
