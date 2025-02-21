import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('Sucursais')
export class Sucursais extends BaseEntity {

  @PrimaryGeneratedColumn()
  SucursalID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'CompanhiaID', nullable: false })
  CompanhiaID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'Nome', nullable: false })
  Nome: string;

  @ApiProperty({ required: false })
  @Column({ name: 'Endereco', nullable: true })
  Endereco: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'Cidade', nullable: true })
  Cidade: string | null;

  @ApiProperty({ required: false })
  @Column({ name: 'Estado', nullable: true })
  Estado: string | null;
}
