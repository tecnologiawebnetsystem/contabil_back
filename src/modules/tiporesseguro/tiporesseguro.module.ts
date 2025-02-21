import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiporesseguroService } from './tiporesseguro.service';
import { TiporesseguroController } from './tiporesseguro.controller';
import { Tiporesseguro } from './entities/tiporesseguro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tiporesseguro])],
  controllers: [TiporesseguroController],
  providers: [TiporesseguroService],
})
export class TiporesseguroModule {}
