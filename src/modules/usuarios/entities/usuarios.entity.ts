import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('Usuarios')
export class Usuarios extends BaseEntity {

  @PrimaryGeneratedColumn()
  UsuarioID: number;

  @ApiProperty({ required: true })
  @Column({ name: 'Email', nullable: false })
  Email: string;

  @ApiProperty({ required: true })
  @Column({ name: 'Nome', nullable: false })
  Nome: string;

  @ApiProperty({ required: true })
  @Column({ name: 'Sobrenome', nullable: false })
  Sobrenome: string;

  @ApiProperty({ required: true })
  @Column({ name: 'Senha', nullable: false })
  Senha: string;

  @ApiProperty({ required: true })
  @Column({ name: 'Perfil', nullable: false })
  Perfil: string;

  @ApiProperty({ required: false })
  @Column({ name: 'CompanhiaID', nullable: true })
  CompanhiaID: number | null;

  @ApiProperty({ required: false, default: () => new Date() })
  @Column({ name: 'DataCriacao', nullable: true, default: () => new Date() })
  DataCriacao: Date | null;

  @ApiProperty({ required: false, default: () => new Date() })
  @Column({ name: 'DataAtualizacao', nullable: true, default: () => new Date() })
  DataAtualizacao: Date | null;
}
