import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipopagamentoService } from './tipopagamento.service';
import { TipopagamentoController } from './tipopagamento.controller';
import { Tipopagamento } from './entities/tipopagamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipopagamento])],
  controllers: [TipopagamentoController],
  providers: [TipopagamentoService],
})
export class TipopagamentoModule {}
