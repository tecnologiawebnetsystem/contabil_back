import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipopessoaseguroService } from './tipopessoaseguro.service';
import { TipopessoaseguroController } from './tipopessoaseguro.controller';
import { Tipopessoaseguro } from './entities/tipopessoaseguro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipopessoaseguro])],
  controllers: [TipopessoaseguroController],
  providers: [TipopessoaseguroService],
})
export class TipopessoaseguroModule {}
