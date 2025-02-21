import { PartialType } from '@nestjs/swagger';
import { CreateMescontabilDto } from './create-mescontabil.dto';

export class UpdateMescontabilDto extends PartialType(CreateMescontabilDto) {}
