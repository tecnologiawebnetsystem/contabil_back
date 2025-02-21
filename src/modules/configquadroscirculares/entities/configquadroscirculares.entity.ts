import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('ConfigQuadrosCirculares')
export class Configquadroscirculares extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ name: 'created_at', nullable: true })
  created_at: Date | null;

  @ApiProperty({ required: false })
  @Column({ name: 'seguradora_id', nullable: true })
  seguradora_id: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_cadastro_circulares', nullable: true })
  id_cadastro_circulares: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_evento', nullable: true })
  id_evento: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_tipo_movimento_fip', nullable: true })
  id_tipo_movimento_fip: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_tipo_operacao_fip', nullable: true })
  id_tipo_operacao_fip: number | null;
}
