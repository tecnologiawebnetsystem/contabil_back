import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TbbalanceteService } from './tbbalancete.service';
import { TbbalanceteController } from './tbbalancete.controller';
import { Tbbalancete } from './entities/tbbalancete.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tbbalancete])],
  controllers: [TbbalanceteController],
  providers: [TbbalanceteService],
})
export class TbbalanceteModule {}
