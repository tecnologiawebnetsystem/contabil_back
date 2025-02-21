import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuracoes_seguradoraService } from './configuracoes_seguradora.service';
import { Configuracoes_seguradoraController } from './configuracoes_seguradora.controller';
import { Configuracoes_seguradora } from './entities/configuracoes_seguradora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Configuracoes_seguradora])],
  controllers: [Configuracoes_seguradoraController],
  providers: [Configuracoes_seguradoraService],
})
export class Configuracoes_seguradoraModule {}
