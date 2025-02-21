import { PartialType } from '@nestjs/swagger';
import { CreateContratosresseguroDto } from './create-contratosresseguro.dto';

export class UpdateContratosresseguroDto extends PartialType(CreateContratosresseguroDto) {}
