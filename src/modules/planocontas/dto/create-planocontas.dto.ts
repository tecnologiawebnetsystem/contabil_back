import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanocontasDto {
  @ApiProperty({ description: 'ContaID'  })
  ContaID: number;

  @ApiProperty({ description: 'CodigoConta' , maxLength: 20 })
  CodigoConta: string;

  @ApiProperty({ description: 'NomeConta' , maxLength: 255 })
  NomeConta: string;

  @ApiProperty({ description: 'TipoConta' , maxLength: 50 })
  TipoConta: string;

  @ApiProperty({ description: 'ContaSUSEP'  })
  ContaSUSEP: boolean;

  @ApiProperty({ description: 'ContaPaiID'  })
  ContaPaiID?: number;

  @ApiProperty({ description: 'CompanhiaID'  })
  CompanhiaID: number;

}
