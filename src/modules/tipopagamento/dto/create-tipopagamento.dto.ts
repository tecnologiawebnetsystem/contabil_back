import { ApiProperty } from '@nestjs/swagger';

export class CreateTipopagamentoDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoTipoPagamento' , maxLength: 20 })
  CodigoTipoPagamento?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

}
