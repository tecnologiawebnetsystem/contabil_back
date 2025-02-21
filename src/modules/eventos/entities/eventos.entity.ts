import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('Eventos')
export class Eventos extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ name: 'created_at', nullable: true })
  created_at: Date | null;

  @ApiProperty({ required: false })
  @Column({ name: 'seguradora_id', nullable: true })
  seguradora_id: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'CodigoEvento', nullable: true })
  CodigoEvento: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'Descricao', nullable: true })
  Descricao: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'ValorCoeficiente', nullable: true })
  ValorCoeficiente: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_modulo_contabil', nullable: true })
  id_modulo_contabil: number | null;
}
