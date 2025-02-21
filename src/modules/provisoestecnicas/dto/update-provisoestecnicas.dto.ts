import { PartialType } from '@nestjs/swagger';
import { CreateProvisoestecnicasDto } from './create-provisoestecnicas.dto';

export class UpdateProvisoestecnicasDto extends PartialType(CreateProvisoestecnicasDto) {}
