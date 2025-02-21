import { PartialType } from '@nestjs/swagger';
import { CreateTabuabiometricaDto } from './create-tabuabiometrica.dto';

export class UpdateTabuabiometricaDto extends PartialType(CreateTabuabiometricaDto) {}
