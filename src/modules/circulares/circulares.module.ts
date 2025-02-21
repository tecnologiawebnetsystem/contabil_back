import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CircularesService } from './circulares.service';
import { CircularesController } from './circulares.controller';
import { Circulares } from './entities/circulares.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Circulares])],
  controllers: [CircularesController],
  providers: [CircularesService],
})
export class CircularesModule {}
