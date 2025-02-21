import { ApiProperty } from '@nestjs/swagger';

export class CreateTipocontabilizacaoDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'TipoContabilizacao' , maxLength: 20 })
  TipoContabilizacao?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

}
