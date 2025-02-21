import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipocontratoService } from './tipocontrato.service';
import { TipocontratoController } from './tipocontrato.controller';
import { Tipocontrato } from './entities/tipocontrato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipocontrato])],
  controllers: [TipocontratoController],
  providers: [TipocontratoService],
})
export class TipocontratoModule {}
