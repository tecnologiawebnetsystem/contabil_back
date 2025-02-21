import { PartialType } from '@nestjs/swagger';
import { CreateLancamentoscontabeisDto } from './create-lancamentoscontabeis.dto';

export class UpdateLancamentoscontabeisDto extends PartialType(CreateLancamentoscontabeisDto) {}
