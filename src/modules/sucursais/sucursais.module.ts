import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SucursaisService } from './sucursais.service';
import { SucursaisController } from './sucursais.controller';
import { Sucursais } from './entities/sucursais.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sucursais])],
  controllers: [SucursaisController],
  providers: [SucursaisService],
})
export class SucursaisModule {}
