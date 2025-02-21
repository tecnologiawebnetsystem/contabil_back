import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanocontasService } from './planocontas.service';
import { PlanocontasController } from './planocontas.controller';
import { Planocontas } from './entities/planocontas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Planocontas])],
  controllers: [PlanocontasController],
  providers: [PlanocontasService],
})
export class PlanocontasModule {}
