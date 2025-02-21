import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MescontabilService } from './mescontabil.service';
import { MescontabilController } from './mescontabil.controller';
import { Mescontabil } from './entities/mescontabil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mescontabil])],
  controllers: [MescontabilController],
  providers: [MescontabilService],
})
export class MescontabilModule {}
