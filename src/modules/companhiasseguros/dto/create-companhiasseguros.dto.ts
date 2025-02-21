import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanhiassegurosDto {
  @ApiProperty({ description: 'CompanhiaID'  })
  CompanhiaID: number;

  @ApiProperty({ description: 'RazaoSocial' , maxLength: 255 })
  RazaoSocial: string;

  @ApiProperty({ description: 'NomeFantasia' , maxLength: 255 })
  NomeFantasia?: string;

  @ApiProperty({ description: 'CNPJ' , maxLength: 18 })
  CNPJ: string;

  @ApiProperty({ description: 'CodigoSUSEP' , maxLength: 20 })
  CodigoSUSEP?: string;

  @ApiProperty({ description: 'DataCriacao'  })
  DataCriacao?: Date;

  @ApiProperty({ description: 'DataAtualizacao'  })
  DataAtualizacao?: Date;

}
