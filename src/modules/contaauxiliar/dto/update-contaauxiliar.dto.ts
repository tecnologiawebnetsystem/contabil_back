import { PartialType } from '@nestjs/swagger';
import { CreateContaauxiliarDto } from './create-contaauxiliar.dto';

export class UpdateContaauxiliarDto extends PartialType(CreateContaauxiliarDto) {}
