import { PartialType } from '@nestjs/swagger';
import { CreateTiposeguradoraDto } from './create-tiposeguradora.dto';

export class UpdateTiposeguradoraDto extends PartialType(CreateTiposeguradoraDto) {}
