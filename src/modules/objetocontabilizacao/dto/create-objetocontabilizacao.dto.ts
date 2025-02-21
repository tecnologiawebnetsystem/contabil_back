import { ApiProperty } from '@nestjs/swagger';

export class CreateObjetocontabilizacaoDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'Objeto' , maxLength: 10 })
  Objeto?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

  @ApiProperty({ description: 'flgObjetoContabilizacaoAtivo'  })
  flgObjetoContabilizacaoAtivo?: boolean;

}
