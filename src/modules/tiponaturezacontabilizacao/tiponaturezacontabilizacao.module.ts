import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiponaturezacontabilizacaoService } from './tiponaturezacontabilizacao.service';
import { TiponaturezacontabilizacaoController } from './tiponaturezacontabilizacao.controller';
import { Tiponaturezacontabilizacao } from './entities/tiponaturezacontabilizacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tiponaturezacontabilizacao])],
  controllers: [TiponaturezacontabilizacaoController],
  providers: [TiponaturezacontabilizacaoService],
})
export class TiponaturezacontabilizacaoModule {}
