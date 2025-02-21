import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('PlanoContas')
export class Planocontas extends BaseEntity {

  @PrimaryGeneratedColumn()
  ContaID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'CodigoConta', nullable: false })
  CodigoConta: string;

  @ApiProperty({ required: true })
  @Column({ name: 'NomeConta', nullable: false })
  NomeConta: string;

  @ApiProperty({ required: true })
  @Column({ name: 'TipoConta', nullable: false })
  TipoConta: string;

  @ApiProperty({ required: true, default: ((1)) })
  @Column({ name: 'ContaSUSEP', nullable: false, default: ((1)) })
  ContaSUSEP: boolean;

  @ApiProperty({ required: false })
  @Column({ name: 'ContaPaiID', nullable: true })
  ContaPaiID: number | null;

  @ApiProperty({ required: true })
  @Column({ name: 'CompanhiaID', nullable: false })
  CompanhiaID: number;
}
