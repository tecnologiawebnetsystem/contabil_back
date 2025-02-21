import { PartialType } from '@nestjs/swagger';
import { CreateConfiguracoes_seguradoraDto } from './create-configuracoes_seguradora.dto';

export class UpdateConfiguracoes_seguradoraDto extends PartialType(CreateConfiguracoes_seguradoraDto) {}
