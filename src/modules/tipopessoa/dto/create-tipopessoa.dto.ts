import { ApiProperty } from '@nestjs/swagger';

export class CreateTipopessoaDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoTipoPessoa' , maxLength: 20 })
  CodigoTipoPessoa?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

}
