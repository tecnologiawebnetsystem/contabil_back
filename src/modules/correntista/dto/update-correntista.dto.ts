import { PartialType } from '@nestjs/swagger';
import { CreateCorrentistaDto } from './create-correntista.dto';

export class UpdateCorrentistaDto extends PartialType(CreateCorrentistaDto) {}
