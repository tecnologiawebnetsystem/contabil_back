import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipooperacaofipService } from './tipooperacaofip.service';
import { TipooperacaofipController } from './tipooperacaofip.controller';
import { Tipooperacaofip } from './entities/tipooperacaofip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipooperacaofip])],
  controllers: [TipooperacaofipController],
  providers: [TipooperacaofipService],
})
export class TipooperacaofipModule {}
