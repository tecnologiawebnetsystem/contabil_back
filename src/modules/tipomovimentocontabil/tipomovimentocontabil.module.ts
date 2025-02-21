import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipomovimentocontabilService } from './tipomovimentocontabil.service';
import { TipomovimentocontabilController } from './tipomovimentocontabil.controller';
import { Tipomovimentocontabil } from './entities/tipomovimentocontabil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipomovimentocontabil])],
  controllers: [TipomovimentocontabilController],
  providers: [TipomovimentocontabilService],
})
export class TipomovimentocontabilModule {}
