import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('Correntista')
export class Correntista extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: false })
  @Column({ name: 'created_at', nullable: true })
  created_at: Date | null;

  @ApiProperty({ required: false })
  @Column({ name: 'seguradora_id', nullable: true })
  seguradora_id: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'id_plano_contas', nullable: true })
  id_plano_contas: number | null;

  @ApiProperty({ required: false })
  @Column({ name: 'ContaAuxiliar', nullable: true })
  ContaAuxiliar: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'CodCorrentista', nullable: true })
  CodCorrentista: string | null;
}
