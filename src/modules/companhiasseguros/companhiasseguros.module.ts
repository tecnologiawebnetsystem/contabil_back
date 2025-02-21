import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanhiassegurosService } from './companhiasseguros.service';
import { CompanhiassegurosController } from './companhiasseguros.controller';
import { Companhiasseguros } from './entities/companhiasseguros.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Companhiasseguros])],
  controllers: [CompanhiassegurosController],
  providers: [CompanhiassegurosService],
})
export class CompanhiassegurosModule {}
