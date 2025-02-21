import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipocontratoresseguroService } from './tipocontratoresseguro.service';
import { TipocontratoresseguroController } from './tipocontratoresseguro.controller';
import { Tipocontratoresseguro } from './entities/tipocontratoresseguro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipocontratoresseguro])],
  controllers: [TipocontratoresseguroController],
  providers: [TipocontratoresseguroService],
})
export class TipocontratoresseguroModule {}
