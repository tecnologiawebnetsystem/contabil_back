import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratosresseguroService } from './contratosresseguro.service';
import { ContratosresseguroController } from './contratosresseguro.controller';
import { Contratosresseguro } from './entities/contratosresseguro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contratosresseguro])],
  controllers: [ContratosresseguroController],
  providers: [ContratosresseguroService],
})
export class ContratosresseguroModule {}
