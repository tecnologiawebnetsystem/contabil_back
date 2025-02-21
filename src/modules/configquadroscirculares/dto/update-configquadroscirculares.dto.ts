import { PartialType } from '@nestjs/swagger';
import { CreateConfigquadroscircularesDto } from './create-configquadroscirculares.dto';

export class UpdateConfigquadroscircularesDto extends PartialType(CreateConfigquadroscircularesDto) {}
