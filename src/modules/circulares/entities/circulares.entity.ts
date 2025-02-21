import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('Circulares')
export class Circulares extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ name: 'created_at', nullable: true })
  created_at: Date | null;

  @ApiProperty({ required: false })
  @Column({ name: 'seguradora_id', nullable: true })
  seguradora_id: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'CodigoCircular', nullable: true })
  CodigoCircular: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'NomeCircular', nullable: true })
  NomeCircular: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'NumeroAnexo', nullable: true })
  NumeroAnexo: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'NomeQuadro', nullable: true })
  NomeQuadro: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'Ativo', nullable: true })
  Ativo: boolean | null;

  @ApiProperty({ required: false })
  @Column({ name: 'DescricaoQuadro', nullable: true })
  DescricaoQuadro: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'Periodicidade', nullable: true })
  Periodicidade: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'TipoArquivo', nullable: true })
  TipoArquivo: string | null;
}
