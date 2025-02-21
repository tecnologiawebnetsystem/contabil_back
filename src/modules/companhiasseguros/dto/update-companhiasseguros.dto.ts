import { PartialType } from '@nestjs/swagger';
import { CreateCompanhiassegurosDto } from './create-companhiasseguros.dto';

export class UpdateCompanhiassegurosDto extends PartialType(CreateCompanhiassegurosDto) {}
