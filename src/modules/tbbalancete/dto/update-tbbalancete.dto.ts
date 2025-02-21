import { PartialType } from '@nestjs/swagger';
import { CreateTbbalanceteDto } from './create-tbbalancete.dto';

export class UpdateTbbalanceteDto extends PartialType(CreateTbbalanceteDto) {}
