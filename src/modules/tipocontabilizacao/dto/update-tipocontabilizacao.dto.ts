import { PartialType } from '@nestjs/swagger';
import { CreateTipocontabilizacaoDto } from './create-tipocontabilizacao.dto';

export class UpdateTipocontabilizacaoDto extends PartialType(CreateTipocontabilizacaoDto) {}
