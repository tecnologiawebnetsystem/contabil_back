import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../shared/base.entity';

@Entity('user')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ required: true })
  @Column({ name: 'name', nullable: false })
  name: string;

  @ApiProperty({ required: true })
  @Column({ name: 'email', nullable: false })
  email: string;
}
