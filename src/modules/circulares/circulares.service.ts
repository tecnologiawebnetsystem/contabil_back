import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Circulares } from './entities/circulares.entity';
import { CreateCircularesDto } from './dto/create-circulares.dto';
import { UpdateCircularesDto } from './dto/update-circulares.dto';

@Injectable()
export class CircularesService {
  constructor(
    @InjectRepository(Circulares)
    private readonly circularesRepository: Repository<Circulares>,
  ) {}

  async create(createCircularesDto: CreateCircularesDto): Promise<Circulares> {
    const newCirculares = this.circularesRepository.create(createCircularesDto);
    return this.circularesRepository.save(newCirculares);
  }

  async findAll(): Promise<Circulares[]> {
    return this.circularesRepository.find();
  }

  async findOne(id: any): Promise<Circulares> {
    const found = await this.circularesRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Circulares with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateCircularesDto: UpdateCircularesDto): Promise<Circulares> {
    const result = await this.circularesRepository.update({ id: id }, updateCircularesDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Circulares with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.circularesRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Circulares with id "${id}" not found`);
    }
  }
}
