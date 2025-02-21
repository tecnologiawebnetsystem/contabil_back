import { ApiProperty } from '@nestjs/swagger';

export class CreateContratosresseguroDto {
  @ApiProperty({ description: 'ContratoID'  })
  ContratoID: number;

  @ApiProperty({ description: 'CompanhiaID'  })
  CompanhiaID: number;

  @ApiProperty({ description: 'NumeroContrato' , maxLength: 50 })
  NumeroContrato: string;

  @ApiProperty({ description: 'Resseguradora' , maxLength: 255 })
  Resseguradora: string;

  @ApiProperty({ description: 'TipoContrato' , maxLength: 50 })
  TipoContrato: string;

  @ApiProperty({ description: 'DataInicio'  })
  DataInicio: Date;

  @ApiProperty({ description: 'DataFim'  })
  DataFim: Date;

}
