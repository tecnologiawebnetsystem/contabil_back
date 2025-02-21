import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabuabiometricaService } from './tabuabiometrica.service';
import { TabuabiometricaController } from './tabuabiometrica.controller';
import { Tabuabiometrica } from './entities/tabuabiometrica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tabuabiometrica])],
  controllers: [TabuabiometricaController],
  providers: [TabuabiometricaService],
})
export class TabuabiometricaModule {}
