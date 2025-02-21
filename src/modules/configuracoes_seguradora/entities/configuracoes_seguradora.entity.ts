import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('configuracoes_seguradora')
export class Configuracoes_seguradora extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ name: 'created_at', nullable: true })
  created_at: Date | null;

  @ApiProperty({ required: false })
  @Column({ name: 'seguradora_id', nullable: true })
  seguradora_id: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'cor_primaria', nullable: true })
  cor_primaria: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'cor_segundaria', nullable: true })
  cor_segundaria: string | null;
}
