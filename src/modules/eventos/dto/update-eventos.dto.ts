import { PartialType } from '@nestjs/swagger';
import { CreateEventosDto } from './create-eventos.dto';

export class UpdateEventosDto extends PartialType(CreateEventosDto) {}
