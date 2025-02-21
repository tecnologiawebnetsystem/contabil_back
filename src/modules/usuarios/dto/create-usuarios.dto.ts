import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuariosDto {
  @ApiProperty({ description: 'UsuarioID'  })
  UsuarioID: number;

  @ApiProperty({ description: 'Email' , maxLength: 255 })
  Email: string;

  @ApiProperty({ description: 'Nome' , maxLength: 100 })
  Nome: string;

  @ApiProperty({ description: 'Sobrenome' , maxLength: 100 })
  Sobrenome: string;

  @ApiProperty({ description: 'Senha' , maxLength: 255 })
  Senha: string;

  @ApiProperty({ description: 'Perfil' , maxLength: 50 })
  Perfil: string;

  @ApiProperty({ description: 'CompanhiaID'  })
  CompanhiaID?: number;

  @ApiProperty({ description: 'DataCriacao'  })
  DataCriacao?: Date;

  @ApiProperty({ description: 'DataAtualizacao'  })
  DataAtualizacao?: Date;

}
