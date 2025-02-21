import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Configquadroscirculares } from './entities/configquadroscirculares.entity';
import { CreateConfigquadroscircularesDto } from './dto/create-configquadroscirculares.dto';
import { UpdateConfigquadroscircularesDto } from './dto/update-configquadroscirculares.dto';

@Injectable()
export class ConfigquadroscircularesService {
  constructor(
    @InjectRepository(Configquadroscirculares)
    private readonly configquadroscircularesRepository: Repository<Configquadroscirculares>,
  ) {}

  async create(createConfigquadroscircularesDto: CreateConfigquadroscircularesDto): Promise<Configquadroscirculares> {
    const newConfigquadroscirculares = this.configquadroscircularesRepository.create(createConfigquadroscircularesDto);
    return this.configquadroscircularesRepository.save(newConfigquadroscirculares);
  }

  async findAll(): Promise<Configquadroscirculares[]> {
    return this.configquadroscircularesRepository.find();
  }

  async findOne(id: any): Promise<Configquadroscirculares> {
    const found = await this.configquadroscircularesRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Configquadroscirculares with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateConfigquadroscircularesDto: UpdateConfigquadroscircularesDto): Promise<Configquadroscirculares> {
    const result = await this.configquadroscircularesRepository.update({ id: id }, updateConfigquadroscircularesDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Configquadroscirculares with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.configquadroscircularesRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Configquadroscirculares with id "${id}" not found`);
    }
  }
}
