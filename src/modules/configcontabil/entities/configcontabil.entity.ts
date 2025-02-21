import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('ConfigContabil')
export class Configcontabil extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ name: 'created_at', nullable: true })
  created_at: Date | null;

  @ApiProperty({ required: false })
  @Column({ name: 'seguradora_id', nullable: true })
  seguradora_id: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_eventos', nullable: true })
  id_eventos: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_objeto_contabilizacao', nullable: true })
  id_objeto_contabilizacao: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_tipo_resseguradora', nullable: true })
  id_tipo_resseguradora: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_plano_contas', nullable: true })
  id_plano_contas: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_ramo_contabil', nullable: true })
  id_ramo_contabil: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_historico_padrao', nullable: true })
  id_historico_padrao: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_tipo_natureza_contabilizacao', nullable: true })
  id_tipo_natureza_contabilizacao: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_tipo_contabilizacao', nullable: true })
  id_tipo_contabilizacao: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'flgContabiliza', nullable: true })
  flgContabiliza: boolean | null;
}
