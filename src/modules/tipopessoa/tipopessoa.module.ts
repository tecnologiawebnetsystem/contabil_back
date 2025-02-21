import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipopessoaService } from './tipopessoa.service';
import { TipopessoaController } from './tipopessoa.controller';
import { Tipopessoa } from './entities/tipopessoa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipopessoa])],
  controllers: [TipopessoaController],
  providers: [TipopessoaService],
})
export class TipopessoaModule {}
