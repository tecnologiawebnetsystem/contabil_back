import { PartialType } from '@nestjs/swagger';
import { CreateRelatoriosfipDto } from './create-relatoriosfip.dto';

export class UpdateRelatoriosfipDto extends PartialType(CreateRelatoriosfipDto) {}
