import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ramocontabil } from './entities/ramocontabil.entity';
import { CreateRamocontabilDto } from './dto/create-ramocontabil.dto';
import { UpdateRamocontabilDto } from './dto/update-ramocontabil.dto';

@Injectable()
export class RamocontabilService {
  constructor(
    @InjectRepository(Ramocontabil)
    private readonly ramocontabilRepository: Repository<Ramocontabil>,
  ) {}

  async create(createRamocontabilDto: CreateRamocontabilDto): Promise<Ramocontabil> {
    const newRamocontabil = this.ramocontabilRepository.create(createRamocontabilDto);
    return this.ramocontabilRepository.save(newRamocontabil);
  }

  async findAll(): Promise<Ramocontabil[]> {
    return this.ramocontabilRepository.find();
  }

  async findOne(id: any): Promise<Ramocontabil> {
    const found = await this.ramocontabilRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Ramocontabil with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateRamocontabilDto: UpdateRamocontabilDto): Promise<Ramocontabil> {
    const result = await this.ramocontabilRepository.update({ id: id }, updateRamocontabilDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Ramocontabil with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.ramocontabilRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Ramocontabil with id "${id}" not found`);
    }
  }
}
