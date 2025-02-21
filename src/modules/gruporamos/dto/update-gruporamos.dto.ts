import { PartialType } from '@nestjs/swagger';
import { CreateGruporamosDto } from './create-gruporamos.dto';

export class UpdateGruporamosDto extends PartialType(CreateGruporamosDto) {}
