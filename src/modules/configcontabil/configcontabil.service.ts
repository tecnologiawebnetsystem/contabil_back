import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Configcontabil } from './entities/configcontabil.entity';
import { CreateConfigcontabilDto } from './dto/create-configcontabil.dto';
import { UpdateConfigcontabilDto } from './dto/update-configcontabil.dto';

@Injectable()
export class ConfigcontabilService {
  constructor(
    @InjectRepository(Configcontabil)
    private readonly configcontabilRepository: Repository<Configcontabil>,
  ) {}

  async create(createConfigcontabilDto: CreateConfigcontabilDto): Promise<Configcontabil> {
    const newConfigcontabil = this.configcontabilRepository.create(createConfigcontabilDto);
    return this.configcontabilRepository.save(newConfigcontabil);
  }

  async findAll(): Promise<Configcontabil[]> {
    return this.configcontabilRepository.find();
  }

  async findOne(id: any): Promise<Configcontabil> {
    const found = await this.configcontabilRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Configcontabil with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateConfigcontabilDto: UpdateConfigcontabilDto): Promise<Configcontabil> {
    const result = await this.configcontabilRepository.update({ id: id }, updateConfigcontabilDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Configcontabil with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.configcontabilRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Configcontabil with id "${id}" not found`);
    }
  }
}
