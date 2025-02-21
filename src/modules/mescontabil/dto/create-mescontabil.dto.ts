import { ApiProperty } from '@nestjs/swagger';

export class CreateMescontabilDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'MesContabil' , maxLength: 10 })
  MesContabil?: string;

  @ApiProperty({ description: 'Ativo'  })
  Ativo?: boolean;

}
