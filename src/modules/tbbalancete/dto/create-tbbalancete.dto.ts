import { ApiProperty } from '@nestjs/swagger';

export class CreateTbbalanceteDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

}
