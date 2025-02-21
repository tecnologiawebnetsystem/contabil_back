import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('RelatoriosFIP')
export class Relatoriosfip extends BaseEntity {

  @PrimaryGeneratedColumn()
  RelatorioID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'CompanhiaID', nullable: false })
  CompanhiaID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'PeriodoReferencia', nullable: false })
  PeriodoReferencia: Date;

  @ApiProperty({ required: true })
  @Column({ name: 'TipoQuadro', nullable: false })
  TipoQuadro: string;

  @ApiProperty({ required: false })
  @Column({ name: 'DataEnvio', nullable: true })
  DataEnvio: Date | null;

  @ApiProperty({ required: true })
  @Column({ name: 'Status', nullable: false })
  Status: string;
}
