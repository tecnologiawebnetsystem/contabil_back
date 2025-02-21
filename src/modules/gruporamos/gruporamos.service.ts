import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gruporamos } from './entities/gruporamos.entity';
import { CreateGruporamosDto } from './dto/create-gruporamos.dto';
import { UpdateGruporamosDto } from './dto/update-gruporamos.dto';

@Injectable()
export class GruporamosService {
  constructor(
    @InjectRepository(Gruporamos)
    private readonly gruporamosRepository: Repository<Gruporamos>,
  ) {}

  async create(createGruporamosDto: CreateGruporamosDto): Promise<Gruporamos> {
    const newGruporamos = this.gruporamosRepository.create(createGruporamosDto);
    return this.gruporamosRepository.save(newGruporamos);
  }

  async findAll(): Promise<Gruporamos[]> {
    return this.gruporamosRepository.find();
  }

  async findOne(id: any): Promise<Gruporamos> {
    const found = await this.gruporamosRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Gruporamos with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateGruporamosDto: UpdateGruporamosDto): Promise<Gruporamos> {
    const result = await this.gruporamosRepository.update({ id: id }, updateGruporamosDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Gruporamos with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.gruporamosRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Gruporamos with id "${id}" not found`);
    }
  }
}
