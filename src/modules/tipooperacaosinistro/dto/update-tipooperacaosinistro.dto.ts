import { PartialType } from '@nestjs/swagger';
import { CreateTipooperacaosinistroDto } from './create-tipooperacaosinistro.dto';

export class UpdateTipooperacaosinistroDto extends PartialType(CreateTipooperacaosinistroDto) {}
