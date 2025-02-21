import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruporamosService } from './gruporamos.service';
import { GruporamosController } from './gruporamos.controller';
import { Gruporamos } from './entities/gruporamos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gruporamos])],
  controllers: [GruporamosController],
  providers: [GruporamosService],
})
export class GruporamosModule {}
