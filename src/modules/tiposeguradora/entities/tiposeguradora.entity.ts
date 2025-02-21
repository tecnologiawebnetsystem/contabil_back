import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('TipoSeguradora')
export class Tiposeguradora extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ name: 'created_at', nullable: true })
  created_at: Date | null;

  @ApiProperty({ required: false })
  @Column({ name: 'seguradora_id', nullable: true })
  seguradora_id: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'CodigoTipoResseguradora', nullable: true })
  CodigoTipoResseguradora: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'Descricao', nullable: true })
  Descricao: string | null;
}
