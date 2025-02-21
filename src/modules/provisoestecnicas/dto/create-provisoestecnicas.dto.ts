import { ApiProperty } from '@nestjs/swagger';

export class CreateProvisoestecnicasDto {
  @ApiProperty({ description: 'ProvisaoID'  })
  ProvisaoID: number;

  @ApiProperty({ description: 'CompanhiaID'  })
  CompanhiaID: number;

  @ApiProperty({ description: 'TipoProvisao' , maxLength: 50 })
  TipoProvisao: string;

  @ApiProperty({ description: 'DataCalculo'  })
  DataCalculo: Date;

  @ApiProperty({ description: 'Valor'  })
  Valor: number;

}
