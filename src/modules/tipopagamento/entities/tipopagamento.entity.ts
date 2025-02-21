import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('TipoPagamento')
export class Tipopagamento extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ name: 'created_at', nullable: true })
  created_at: Date | null;

  @ApiProperty({ required: false })
  @Column({ name: 'seguradora_id', nullable: true })
  seguradora_id: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'CodigoTipoPagamento', nullable: true })
  CodigoTipoPagamento: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'Descricao', nullable: true })
  Descricao: string | null;
}
