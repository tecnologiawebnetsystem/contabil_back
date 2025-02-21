import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContaauxiliarService } from './contaauxiliar.service';
import { ContaauxiliarController } from './contaauxiliar.controller';
import { Contaauxiliar } from './entities/contaauxiliar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contaauxiliar])],
  controllers: [ContaauxiliarController],
  providers: [ContaauxiliarService],
})
export class ContaauxiliarModule {}
