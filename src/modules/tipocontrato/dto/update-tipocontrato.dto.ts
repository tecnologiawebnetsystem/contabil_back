import { PartialType } from '@nestjs/swagger';
import { CreateTipocontratoDto } from './create-tipocontrato.dto';

export class UpdateTipocontratoDto extends PartialType(CreateTipocontratoDto) {}
