import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipooperacaosinistroService } from './tipooperacaosinistro.service';
import { TipooperacaosinistroController } from './tipooperacaosinistro.controller';
import { Tipooperacaosinistro } from './entities/tipooperacaosinistro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipooperacaosinistro])],
  controllers: [TipooperacaosinistroController],
  providers: [TipooperacaosinistroService],
})
export class TipooperacaosinistroModule {}
