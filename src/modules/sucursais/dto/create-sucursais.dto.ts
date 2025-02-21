import { ApiProperty } from '@nestjs/swagger';

export class CreateSucursaisDto {
  @ApiProperty({ description: 'SucursalID'  })
  SucursalID: number;

  @ApiProperty({ description: 'CompanhiaID'  })
  CompanhiaID: number;

  @ApiProperty({ description: 'Nome' , maxLength: 255 })
  Nome: string;

  @ApiProperty({ description: 'Endereco' , maxLength: 255 })
  Endereco?: string;

  @ApiProperty({ description: 'Cidade' , maxLength: 100 })
  Cidade?: string;

  @ApiProperty({ description: 'Estado' , maxLength: 50 })
  Estado?: string;

}
