import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('LancamentosContabeis')
export class Lancamentoscontabeis extends BaseEntity {

  @PrimaryGeneratedColumn()
  LancamentoID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'CompanhiaID', nullable: false })
  CompanhiaID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'DataLancamento', nullable: false })
  DataLancamento: Date;

  @ApiProperty({ required: true })
  @Column({ name: 'Descricao', nullable: false })
  Descricao: string;

  @ApiProperty({ required: true })
  @Column({ name: 'Valor', nullable: false })
  Valor: number;

  @ApiProperty({ required: true })
  @Column({ name: 'ContaDebitoID', nullable: false })
  ContaDebitoID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'ContaCreditoID', nullable: false })
  ContaCreditoID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'UsuarioID', nullable: false })
  UsuarioID: number;

  @ApiProperty({ required: false, default: () => new Date() })
  @Column({ name: 'DataCriacao', nullable: true, default: () => new Date() })
  DataCriacao: Date | null;
}
