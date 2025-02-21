import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('CompanhiasSeguros')
export class Companhiasseguros extends BaseEntity {

  @PrimaryGeneratedColumn()
  CompanhiaID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'RazaoSocial', nullable: false })
  RazaoSocial: string;

  @ApiProperty({ required: false })
  @Column({ name: 'NomeFantasia', nullable: true })
  NomeFantasia: string | null;

  @ApiProperty({ required: true })
  @Column({ name: 'CNPJ', nullable: false })
  CNPJ: string;

  @ApiProperty({ required: false })
  @Column({ name: 'CodigoSUSEP', nullable: true })
  CodigoSUSEP: string | null;

  @ApiProperty({ required: false, default: () => new Date() })
  @Column({ name: 'DataCriacao', nullable: true, default: () => new Date() })
  DataCriacao: Date | null;

  @ApiProperty({ required: false, default: () => new Date() })
  @Column({ name: 'DataAtualizacao', nullable: true, default: () => new Date() })
  DataAtualizacao: Date | null;
}
