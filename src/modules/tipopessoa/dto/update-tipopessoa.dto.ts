import { PartialType } from '@nestjs/swagger';
import { CreateTipopessoaDto } from './create-tipopessoa.dto';

export class UpdateTipopessoaDto extends PartialType(CreateTipopessoaDto) {}
