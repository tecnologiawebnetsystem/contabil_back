import { PartialType } from '@nestjs/swagger';
import { CreateTipoapoliceDto } from './create-tipoapolice.dto';

export class UpdateTipoapoliceDto extends PartialType(CreateTipoapoliceDto) {}
