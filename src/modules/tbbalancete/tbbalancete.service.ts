import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tbbalancete } from './entities/tbbalancete.entity';
import { CreateTbbalanceteDto } from './dto/create-tbbalancete.dto';
import { UpdateTbbalanceteDto } from './dto/update-tbbalancete.dto';

@Injectable()
export class TbbalanceteService {
  constructor(
    @InjectRepository(Tbbalancete)
    private readonly tbbalanceteRepository: Repository<Tbbalancete>,
  ) {}

  async create(createTbbalanceteDto: CreateTbbalanceteDto): Promise<Tbbalancete> {
    const newTbbalancete = this.tbbalanceteRepository.create(createTbbalanceteDto);
    return this.tbbalanceteRepository.save(newTbbalancete);
  }

  async findAll(): Promise<Tbbalancete[]> {
    return this.tbbalanceteRepository.find();
  }

  async findOne(id: any): Promise<Tbbalancete> {
    const found = await this.tbbalanceteRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tbbalancete with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTbbalanceteDto: UpdateTbbalanceteDto): Promise<Tbbalancete> {
    const result = await this.tbbalanceteRepository.update({ id: id }, updateTbbalanceteDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tbbalancete with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tbbalanceteRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tbbalancete with id "${id}" not found`);
    }
  }
}
