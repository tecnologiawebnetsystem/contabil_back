import { ApiProperty } from '@nestjs/swagger';

export class CreateRelatoriosfipDto {
  @ApiProperty({ description: 'RelatorioID'  })
  RelatorioID: number;

  @ApiProperty({ description: 'CompanhiaID'  })
  CompanhiaID: number;

  @ApiProperty({ description: 'PeriodoReferencia'  })
  PeriodoReferencia: Date;

  @ApiProperty({ description: 'TipoQuadro' , maxLength: 50 })
  TipoQuadro: string;

  @ApiProperty({ description: 'DataEnvio'  })
  DataEnvio?: Date;

  @ApiProperty({ description: 'Status' , maxLength: 20 })
  Status: string;

}
