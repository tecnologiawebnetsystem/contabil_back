import { ApiProperty } from '@nestjs/swagger';

export class CreateConfiguracoes_seguradoraDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'cor_primaria' , maxLength: 50 })
  cor_primaria?: string;

  @ApiProperty({ description: 'cor_segundaria' , maxLength: 50 })
  cor_segundaria?: string;

}
