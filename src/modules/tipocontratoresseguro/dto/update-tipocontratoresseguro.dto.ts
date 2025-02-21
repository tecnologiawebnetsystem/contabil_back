import { PartialType } from '@nestjs/swagger';
import { CreateTipocontratoresseguroDto } from './create-tipocontratoresseguro.dto';

export class UpdateTipocontratoresseguroDto extends PartialType(CreateTipocontratoresseguroDto) {}
