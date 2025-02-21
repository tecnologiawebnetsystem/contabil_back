import { ApiProperty } from '@nestjs/swagger';

export class CreateTiposeguradoraDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoTipoResseguradora' , maxLength: 20 })
  CodigoTipoResseguradora?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

}
