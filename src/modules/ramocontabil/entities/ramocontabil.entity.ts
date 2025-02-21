import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('RamoContabil')
export class Ramocontabil extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ name: 'created_at', nullable: true })
  created_at: Date | null;

  @ApiProperty({ required: false })
  @Column({ name: 'seguradora_id', nullable: true })
  seguradora_id: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'CodigoRamo', nullable: true })
  CodigoRamo: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'CodigoRamoSusep', nullable: true })
  CodigoRamoSusep: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'flgRamoAtivo', nullable: true })
  flgRamoAtivo: boolean | null;
}
