import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricopadraoService } from './historicopadrao.service';
import { HistoricopadraoController } from './historicopadrao.controller';
import { Historicopadrao } from './entities/historicopadrao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Historicopadrao])],
  controllers: [HistoricopadraoController],
  providers: [HistoricopadraoService],
})
export class HistoricopadraoModule {}
