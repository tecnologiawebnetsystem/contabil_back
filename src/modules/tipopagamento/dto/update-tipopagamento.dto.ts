import { PartialType } from '@nestjs/swagger';
import { CreateTipopagamentoDto } from './create-tipopagamento.dto';

export class UpdateTipopagamentoDto extends PartialType(CreateTipopagamentoDto) {}
