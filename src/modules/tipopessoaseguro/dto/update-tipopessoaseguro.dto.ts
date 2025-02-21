import { PartialType } from '@nestjs/swagger';
import { CreateTipopessoaseguroDto } from './create-tipopessoaseguro.dto';

export class UpdateTipopessoaseguroDto extends PartialType(CreateTipopessoaseguroDto) {}
