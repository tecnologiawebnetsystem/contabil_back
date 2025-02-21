import { ApiProperty } from '@nestjs/swagger';

export class CreateCorrentistaDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'id_plano_contas'  })
  id_plano_contas?: number;

  @ApiProperty({ description: 'ContaAuxiliar' , maxLength: 50 })
  ContaAuxiliar?: string;

  @ApiProperty({ description: 'CodCorrentista' , maxLength: 50 })
  CodCorrentista?: string;

}
