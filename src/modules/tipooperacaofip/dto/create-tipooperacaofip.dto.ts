import { ApiProperty } from '@nestjs/swagger';

export class CreateTipooperacaofipDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoTipoOperacao'  })
  CodigoTipoOperacao?: number;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

}
