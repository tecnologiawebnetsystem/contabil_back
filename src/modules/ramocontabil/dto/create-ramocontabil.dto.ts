import { ApiProperty } from '@nestjs/swagger';

export class CreateRamocontabilDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'CodigoRamo'  })
  CodigoRamo?: number;

  @ApiProperty({ description: 'CodigoRamoSusep'  })
  CodigoRamoSusep?: number;

  @ApiProperty({ description: 'flgRamoAtivo'  })
  flgRamoAtivo?: boolean;

}
