import { PartialType } from '@nestjs/swagger';
import { CreateTipomovimentofipDto } from './create-tipomovimentofip.dto';

export class UpdateTipomovimentofipDto extends PartialType(CreateTipomovimentofipDto) {}
