import { ApiProperty } from '@nestjs/swagger';

export class CreateEventosDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoEvento'  })
  CodigoEvento?: number;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

  @ApiProperty({ description: 'ValorCoeficiente'  })
  ValorCoeficiente?: number;

  @ApiProperty({ description: 'id_modulo_contabil'  })
  id_modulo_contabil?: number;

}
