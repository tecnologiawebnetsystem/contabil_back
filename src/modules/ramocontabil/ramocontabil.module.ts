import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RamocontabilService } from './ramocontabil.service';
import { RamocontabilController } from './ramocontabil.controller';
import { Ramocontabil } from './entities/ramocontabil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ramocontabil])],
  controllers: [RamocontabilController],
  providers: [RamocontabilService],
})
export class RamocontabilModule {}
