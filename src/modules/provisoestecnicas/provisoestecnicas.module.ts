import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvisoestecnicasService } from './provisoestecnicas.service';
import { ProvisoestecnicasController } from './provisoestecnicas.controller';
import { Provisoestecnicas } from './entities/provisoestecnicas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provisoestecnicas])],
  controllers: [ProvisoestecnicasController],
  providers: [ProvisoestecnicasService],
})
export class ProvisoestecnicasModule {}
