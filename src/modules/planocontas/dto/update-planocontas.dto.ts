import { PartialType } from '@nestjs/swagger';
import { CreatePlanocontasDto } from './create-planocontas.dto';

export class UpdatePlanocontasDto extends PartialType(CreatePlanocontasDto) {}
