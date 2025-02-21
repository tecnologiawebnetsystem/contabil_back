import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigquadroscircularesService } from './configquadroscirculares.service';
import { ConfigquadroscircularesController } from './configquadroscirculares.controller';
import { Configquadroscirculares } from './entities/configquadroscirculares.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Configquadroscirculares])],
  controllers: [ConfigquadroscircularesController],
  providers: [ConfigquadroscircularesService],
})
export class ConfigquadroscircularesModule {}
