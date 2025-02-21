import { PartialType } from '@nestjs/swagger';
import { CreateObjetocontabilizacaoDto } from './create-objetocontabilizacao.dto';

export class UpdateObjetocontabilizacaoDto extends PartialType(CreateObjetocontabilizacaoDto) {}
