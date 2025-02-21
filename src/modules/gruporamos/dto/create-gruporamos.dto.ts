import { ApiProperty } from '@nestjs/swagger';

export class CreateGruporamosDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoGrupoRamo'  })
  CodigoGrupoRamo?: number;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

}
