import { ApiProperty } from '@nestjs/swagger';

export class CreateTipooperacaosinistroDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoTipoOperacaoSinistro' , maxLength: 20 })
  CodigoTipoOperacaoSinistro?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

}
