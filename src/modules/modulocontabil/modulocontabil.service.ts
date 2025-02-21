import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modulocontabil } from './entities/modulocontabil.entity';
import { CreateModulocontabilDto } from './dto/create-modulocontabil.dto';
import { UpdateModulocontabilDto } from './dto/update-modulocontabil.dto';

@Injectable()
export class ModulocontabilService {
  constructor(
    @InjectRepository(Modulocontabil)
    private readonly modulocontabilRepository: Repository<Modulocontabil>,
  ) {}

  async create(createModulocontabilDto: CreateModulocontabilDto): Promise<Modulocontabil> {
    const newModulocontabil = this.modulocontabilRepository.create(createModulocontabilDto);
    return this.modulocontabilRepository.save(newModulocontabil);
  }

  async findAll(): Promise<Modulocontabil[]> {
    return this.modulocontabilRepository.find();
  }

  async findOne(id: any): Promise<Modulocontabil> {
    const found = await this.modulocontabilRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Modulocontabil with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateModulocontabilDto: UpdateModulocontabilDto): Promise<Modulocontabil> {
    const result = await this.modulocontabilRepository.update({ id: id }, updateModulocontabilDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Modulocontabil with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.modulocontabilRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Modulocontabil with id "${id}" not found`);
    }
  }
}
