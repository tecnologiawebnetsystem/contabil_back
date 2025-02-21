import { ApiProperty } from '@nestjs/swagger';

export class CreateContaauxiliarDto {
  @ApiProperty({ description: 'created_at'  })
  created_at?: Date;

  @ApiProperty({ description: 'seguradora_id'  })
  seguradora_id?: number;

  @ApiProperty({ description: 'Conta' , maxLength: 50 })
  Conta?: string;

  @ApiProperty({ description: 'Descricao' , maxLength: 100 })
  Descricao?: string;

}
