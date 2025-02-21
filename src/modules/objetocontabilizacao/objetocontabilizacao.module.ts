import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjetocontabilizacaoService } from './objetocontabilizacao.service';
import { ObjetocontabilizacaoController } from './objetocontabilizacao.controller';
import { Objetocontabilizacao } from './entities/objetocontabilizacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Objetocontabilizacao])],
  controllers: [ObjetocontabilizacaoController],
  providers: [ObjetocontabilizacaoService],
})
export class ObjetocontabilizacaoModule {}
