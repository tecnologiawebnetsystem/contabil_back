import { ApiProperty } from '@nestjs/swagger';

export class CreateTiponaturezacontabilizacaoDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'Tipo' , maxLength: 20 })
  Tipo?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

}
