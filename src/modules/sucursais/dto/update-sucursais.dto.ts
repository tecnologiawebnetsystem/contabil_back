import { PartialType } from '@nestjs/swagger';
import { CreateSucursaisDto } from './create-sucursais.dto';

export class UpdateSucursaisDto extends PartialType(CreateSucursaisDto) {}
