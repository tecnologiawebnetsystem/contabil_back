import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorrentistaService } from './correntista.service';
import { CorrentistaController } from './correntista.controller';
import { Correntista } from './entities/correntista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Correntista])],
  controllers: [CorrentistaController],
  providers: [CorrentistaService],
})
export class CorrentistaModule {}
