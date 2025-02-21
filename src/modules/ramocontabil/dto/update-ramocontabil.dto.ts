import { PartialType } from '@nestjs/swagger';
import { CreateRamocontabilDto } from './create-ramocontabil.dto';

export class UpdateRamocontabilDto extends PartialType(CreateRamocontabilDto) {}
