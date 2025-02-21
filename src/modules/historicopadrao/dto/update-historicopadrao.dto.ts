import { PartialType } from '@nestjs/swagger';
import { CreateHistoricopadraoDto } from './create-historicopadrao.dto';

export class UpdateHistoricopadraoDto extends PartialType(CreateHistoricopadraoDto) {}
