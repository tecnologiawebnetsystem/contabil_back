import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposeguradoraService } from './tiposeguradora.service';
import { TiposeguradoraController } from './tiposeguradora.controller';
import { Tiposeguradora } from './entities/tiposeguradora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tiposeguradora])],
  controllers: [TiposeguradoraController],
  providers: [TiposeguradoraService],
})
export class TiposeguradoraModule {}
