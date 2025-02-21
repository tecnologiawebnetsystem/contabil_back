import { PartialType } from '@nestjs/swagger';
import { CreateTipomovimentocontabilDto } from './create-tipomovimentocontabil.dto';

export class UpdateTipomovimentocontabilDto extends PartialType(CreateTipomovimentocontabilDto) {}
