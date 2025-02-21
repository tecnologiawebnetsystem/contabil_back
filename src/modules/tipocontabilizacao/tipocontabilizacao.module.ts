import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipocontabilizacaoService } from './tipocontabilizacao.service';
import { TipocontabilizacaoController } from './tipocontabilizacao.controller';
import { Tipocontabilizacao } from './entities/tipocontabilizacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipocontabilizacao])],
  controllers: [TipocontabilizacaoController],
  providers: [TipocontabilizacaoService],
})
export class TipocontabilizacaoModule {}
