import { PartialType } from '@nestjs/swagger';
import { CreateCircularesDto } from './create-circulares.dto';

export class UpdateCircularesDto extends PartialType(CreateCircularesDto) {}
