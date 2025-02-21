import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('ProvisoesTecnicas')
export class Provisoestecnicas extends BaseEntity {

  @PrimaryGeneratedColumn()
  ProvisaoID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'CompanhiaID', nullable: false })
  CompanhiaID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'TipoProvisao', nullable: false })
  TipoProvisao: string;

  @ApiProperty({ required: true })
  @Column({ name: 'DataCalculo', nullable: false })
  DataCalculo: Date;

  @ApiProperty({ required: true })
  @Column({ name: 'Valor', nullable: false })
  Valor: number;
}
