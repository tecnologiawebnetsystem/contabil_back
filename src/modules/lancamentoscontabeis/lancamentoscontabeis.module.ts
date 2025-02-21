import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LancamentoscontabeisService } from './lancamentoscontabeis.service';
import { LancamentoscontabeisController } from './lancamentoscontabeis.controller';
import { Lancamentoscontabeis } from './entities/lancamentoscontabeis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lancamentoscontabeis])],
  controllers: [LancamentoscontabeisController],
  providers: [LancamentoscontabeisService],
})
export class LancamentoscontabeisModule {}
