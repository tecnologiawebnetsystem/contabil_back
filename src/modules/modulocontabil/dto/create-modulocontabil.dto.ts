import { ApiProperty } from '@nestjs/swagger';

export class CreateModulocontabilDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'Modulo' , maxLength: 10 })
  Modulo?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 50 })
  Descricao?: string;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'flgModuloAtivo'  })
  flgModuloAtivo?: boolean;

}
