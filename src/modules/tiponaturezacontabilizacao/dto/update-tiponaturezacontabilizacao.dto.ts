import { PartialType } from '@nestjs/swagger';
import { CreateTiponaturezacontabilizacaoDto } from './create-tiponaturezacontabilizacao.dto';

export class UpdateTiponaturezacontabilizacaoDto extends PartialType(CreateTiponaturezacontabilizacaoDto) {}
