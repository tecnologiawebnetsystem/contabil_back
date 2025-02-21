import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('ContratosResseguro')
export class Contratosresseguro extends BaseEntity {

  @PrimaryGeneratedColumn()
  ContratoID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'CompanhiaID', nullable: false })
  CompanhiaID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'NumeroContrato', nullable: false })
  NumeroContrato: string;

  @ApiProperty({ required: true })
  @Column({ name: 'Resseguradora', nullable: false })
  Resseguradora: string;

  @ApiProperty({ required: true })
  @Column({ name: 'TipoContrato', nullable: false })
  TipoContrato: string;

  @ApiProperty({ required: true })
  @Column({ name: 'DataInicio', nullable: false })
  DataInicio: Date;

  @ApiProperty({ required: true })
  @Column({ name: 'DataFim', nullable: false })
  DataFim: Date;
}
