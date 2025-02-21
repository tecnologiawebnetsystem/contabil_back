import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelatoriosfipService } from './relatoriosfip.service';
import { RelatoriosfipController } from './relatoriosfip.controller';
import { Relatoriosfip } from './entities/relatoriosfip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Relatoriosfip])],
  controllers: [RelatoriosfipController],
  providers: [RelatoriosfipService],
})
export class RelatoriosfipModule {}
