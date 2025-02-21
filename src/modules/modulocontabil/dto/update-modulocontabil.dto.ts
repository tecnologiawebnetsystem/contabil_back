import { PartialType } from '@nestjs/swagger';
import { CreateModulocontabilDto } from './create-modulocontabil.dto';

export class UpdateModulocontabilDto extends PartialType(CreateModulocontabilDto) {}
