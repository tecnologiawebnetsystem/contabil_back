import { ApiProperty } from '@nestjs/swagger';

export class CreateConfigcontabilDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'id_eventos'  })
  id_eventos?: number;

  @ApiProperty({ description: 'id_objeto_contabilizacao'  })
  id_objeto_contabilizacao?: number;

  @ApiProperty({ description: 'id_tipo_resseguradora'  })
  id_tipo_resseguradora?: number;

  @ApiProperty({ description: 'id_plano_contas'  })
  id_plano_contas?: number;

  @ApiProperty({ description: 'id_ramo_contabil'  })
  id_ramo_contabil?: number;

  @ApiProperty({ description: 'id_historico_padrao'  })
  id_historico_padrao?: number;

  @ApiProperty({ description: 'id_tipo_natureza_contabilizacao'  })
  id_tipo_natureza_contabilizacao?: number;

  @ApiProperty({ description: 'id_tipo_contabilizacao'  })
  id_tipo_contabilizacao?: number;

  @ApiProperty({ description: 'flgContabiliza'  })
  flgContabiliza?: boolean;

}
