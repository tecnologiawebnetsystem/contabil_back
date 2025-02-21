import { ApiProperty } from '@nestjs/swagger';

export class CreateCircularesDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoCircular' , maxLength: 20 })
  CodigoCircular?: string;

  @ApiProperty({ description: 'NomeCircular' , maxLength: 100 })
  NomeCircular?: string;

  @ApiProperty({ description: 'NumeroAnexo' , maxLength: 20 })
  NumeroAnexo?: string;

  @ApiProperty({ description: 'NomeQuadro' , maxLength: 20 })
  NomeQuadro?: string;

  @ApiProperty({ description: 'Ativo'  })
  Ativo?: boolean;

  @ApiProperty({ description: 'DescricaoQuadro' , maxLength: 100 })
  DescricaoQuadro?: string;

  @ApiProperty({ description: 'Periodicidade' , maxLength: 20 })
  Periodicidade?: string;

  @ApiProperty({ description: 'TipoArquivo' , maxLength: 20 })
  TipoArquivo?: string;

}
