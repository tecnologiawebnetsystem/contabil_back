import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mescontabil } from './entities/mescontabil.entity';
import { CreateMescontabilDto } from './dto/create-mescontabil.dto';
import { UpdateMescontabilDto } from './dto/update-mescontabil.dto';

@Injectable()
export class MescontabilService {
  constructor(
    @InjectRepository(Mescontabil)
    private readonly mescontabilRepository: Repository<Mescontabil>,
  ) {}

  async create(createMescontabilDto: CreateMescontabilDto): Promise<Mescontabil> {
    const newMescontabil = this.mescontabilRepository.create(createMescontabilDto);
    return this.mescontabilRepository.save(newMescontabil);
  }

  async findAll(): Promise<Mescontabil[]> {
    return this.mescontabilRepository.find();
  }

  async findOne(id: any): Promise<Mescontabil> {
    const found = await this.mescontabilRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Mescontabil with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateMescontabilDto: UpdateMescontabilDto): Promise<Mescontabil> {
    const result = await this.mescontabilRepository.update({ id: id }, updateMescontabilDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Mescontabil with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.mescontabilRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Mescontabil with id "${id}" not found`);
    }
  }
}
