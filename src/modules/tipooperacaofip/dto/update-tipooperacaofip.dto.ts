import { PartialType } from '@nestjs/swagger';
import { CreateTipooperacaofipDto } from './create-tipooperacaofip.dto';

export class UpdateTipooperacaofipDto extends PartialType(CreateTipooperacaofipDto) {}
