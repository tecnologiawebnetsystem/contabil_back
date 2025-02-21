import { PartialType } from '@nestjs/swagger';
import { CreateTiporesseguroDto } from './create-tiporesseguro.dto';

export class UpdateTiporesseguroDto extends PartialType(CreateTiporesseguroDto) {}
