import { ApiProperty } from '@nestjs/swagger';

export class CreateHistoricopadraoDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoHistoricoPadrao' , maxLength: 20 })
  CodigoHistoricoPadrao?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

}
