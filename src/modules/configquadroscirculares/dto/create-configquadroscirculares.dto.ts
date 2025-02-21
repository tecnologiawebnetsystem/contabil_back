import { ApiProperty } from '@nestjs/swagger';

export class CreateConfigquadroscircularesDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'id_cadastro_circulares'  })
  id_cadastro_circulares?: number;

  @ApiProperty({ description: 'id_evento'  })
  id_evento?: number;

  @ApiProperty({ description: 'id_tipo_movimento_fip'  })
  id_tipo_movimento_fip?: number;

  @ApiProperty({ description: 'id_tipo_operacao_fip'  })
  id_tipo_operacao_fip?: number;

}
