import { ApiProperty } from '@nestjs/swagger';

export class CreateLancamentoscontabeisDto {
  @ApiProperty({ description: 'LancamentoID'  })
  LancamentoID: number;

  @ApiProperty({ description: 'CompanhiaID'  })
  CompanhiaID: number;

  @ApiProperty({ description: 'DataLancamento'  })
  DataLancamento: Date;

  @ApiProperty({ description: 'Descricao' , maxLength: 255 })
  Descricao: string;

  @ApiProperty({ description: 'Valor'  })
  Valor: number;

  @ApiProperty({ description: 'ContaDebitoID'  })
  ContaDebitoID: number;

  @ApiProperty({ description: 'ContaCreditoID'  })
  ContaCreditoID: number;

  @ApiProperty({ description: 'UsuarioID'  })
  UsuarioID: number;

  @ApiProperty({ description: 'DataCriacao'  })
  DataCriacao?: Date;

}
