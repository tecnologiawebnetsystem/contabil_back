import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { Eventos } from './entities/eventos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Eventos])],
  controllers: [EventosController],
  providers: [EventosService],
})
export class EventosModule {}
