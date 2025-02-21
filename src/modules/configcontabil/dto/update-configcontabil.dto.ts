import { PartialType } from '@nestjs/swagger';
import { CreateConfigcontabilDto } from './create-configcontabil.dto';

export class UpdateConfigcontabilDto extends PartialType(CreateConfigcontabilDto) {}
