import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipomovimentofipService } from './tipomovimentofip.service';
import { TipomovimentofipController } from './tipomovimentofip.controller';
import { Tipomovimentofip } from './entities/tipomovimentofip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipomovimentofip])],
  controllers: [TipomovimentofipController],
  providers: [TipomovimentofipService],
})
export class TipomovimentofipModule {}
