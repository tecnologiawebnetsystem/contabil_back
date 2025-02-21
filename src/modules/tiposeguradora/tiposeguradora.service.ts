import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tiposeguradora } from './entities/tiposeguradora.entity';
import { CreateTiposeguradoraDto } from './dto/create-tiposeguradora.dto';
import { UpdateTiposeguradoraDto } from './dto/update-tiposeguradora.dto';

@Injectable()
export class TiposeguradoraService {
  constructor(
    @InjectRepository(Tiposeguradora)
    private readonly tiposeguradoraRepository: Repository<Tiposeguradora>,
  ) {}

  async create(createTiposeguradoraDto: CreateTiposeguradoraDto): Promise<Tiposeguradora> {
    const newTiposeguradora = this.tiposeguradoraRepository.create(createTiposeguradoraDto);
    return this.tiposeguradoraRepository.save(newTiposeguradora);
  }

  async findAll(): Promise<Tiposeguradora[]> {
    return this.tiposeguradoraRepository.find();
  }

  async findOne(id: any): Promise<Tiposeguradora> {
    const found = await this.tiposeguradoraRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tiposeguradora with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTiposeguradoraDto: UpdateTiposeguradoraDto): Promise<Tiposeguradora> {
    const result = await this.tiposeguradoraRepository.update({ id: id }, updateTiposeguradoraDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tiposeguradora with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tiposeguradoraRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tiposeguradora with id "${id}" not found`);
    }
  }
}
