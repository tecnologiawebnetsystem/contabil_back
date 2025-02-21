import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Configuracoes_seguradora } from './entities/configuracoes_seguradora.entity';
import { CreateConfiguracoes_seguradoraDto } from './dto/create-configuracoes_seguradora.dto';
import { UpdateConfiguracoes_seguradoraDto } from './dto/update-configuracoes_seguradora.dto';

@Injectable()
export class Configuracoes_seguradoraService {
  constructor(
    @InjectRepository(Configuracoes_seguradora)
    private readonly configuracoes_seguradoraRepository: Repository<Configuracoes_seguradora>,
  ) {}

  async create(createConfiguracoes_seguradoraDto: CreateConfiguracoes_seguradoraDto): Promise<Configuracoes_seguradora> {
    const newConfiguracoes_seguradora = this.configuracoes_seguradoraRepository.create(createConfiguracoes_seguradoraDto);
    return this.configuracoes_seguradoraRepository.save(newConfiguracoes_seguradora);
  }

  async findAll(): Promise<Configuracoes_seguradora[]> {
    return this.configuracoes_seguradoraRepository.find();
  }

  async findOne(id: any): Promise<Configuracoes_seguradora> {
    const found = await this.configuracoes_seguradoraRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Configuracoes_seguradora with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateConfiguracoes_seguradoraDto: UpdateConfiguracoes_seguradoraDto): Promise<Configuracoes_seguradora> {
    const result = await this.configuracoes_seguradoraRepository.update({ id: id }, updateConfiguracoes_seguradoraDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Configuracoes_seguradora with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.configuracoes_seguradoraRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Configuracoes_seguradora with id "${id}" not found`);
    }
  }
}
