import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoapoliceService } from './tipoapolice.service';
import { TipoapoliceController } from './tipoapolice.controller';
import { Tipoapolice } from './entities/tipoapolice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipoapolice])],
  controllers: [TipoapoliceController],
  providers: [TipoapoliceService],
})
export class TipoapoliceModule {}
