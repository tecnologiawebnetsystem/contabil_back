import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Historicopadrao } from './entities/historicopadrao.entity';
import { CreateHistoricopadraoDto } from './dto/create-historicopadrao.dto';
import { UpdateHistoricopadraoDto } from './dto/update-historicopadrao.dto';

@Injectable()
export class HistoricopadraoService {
  constructor(
    @InjectRepository(Historicopadrao)
    private readonly historicopadraoRepository: Repository<Historicopadrao>,
  ) {}

  async create(createHistoricopadraoDto: CreateHistoricopadraoDto): Promise<Historicopadrao> {
    const newHistoricopadrao = this.historicopadraoRepository.create(createHistoricopadraoDto);
    return this.historicopadraoRepository.save(newHistoricopadrao);
  }

  async findAll(): Promise<Historicopadrao[]> {
    return this.historicopadraoRepository.find();
  }

  async findOne(id: any): Promise<Historicopadrao> {
    const found = await this.historicopadraoRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Historicopadrao with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateHistoricopadraoDto: UpdateHistoricopadraoDto): Promise<Historicopadrao> {
    const result = await this.historicopadraoRepository.update({ id: id }, updateHistoricopadraoDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Historicopadrao with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.historicopadraoRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Historicopadrao with id "${id}" not found`);
    }
  }
}
