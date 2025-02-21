import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipomovimentocontabil } from './entities/tipomovimentocontabil.entity';
import { CreateTipomovimentocontabilDto } from './dto/create-tipomovimentocontabil.dto';
import { UpdateTipomovimentocontabilDto } from './dto/update-tipomovimentocontabil.dto';

@Injectable()
export class TipomovimentocontabilService {
  constructor(
    @InjectRepository(Tipomovimentocontabil)
    private readonly tipomovimentocontabilRepository: Repository<Tipomovimentocontabil>,
  ) {}

  async create(createTipomovimentocontabilDto: CreateTipomovimentocontabilDto): Promise<Tipomovimentocontabil> {
    const newTipomovimentocontabil = this.tipomovimentocontabilRepository.create(createTipomovimentocontabilDto);
    return this.tipomovimentocontabilRepository.save(newTipomovimentocontabil);
  }

  async findAll(): Promise<Tipomovimentocontabil[]> {
    return this.tipomovimentocontabilRepository.find();
  }

  async findOne(id: any): Promise<Tipomovimentocontabil> {
    const found = await this.tipomovimentocontabilRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipomovimentocontabil with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipomovimentocontabilDto: UpdateTipomovimentocontabilDto): Promise<Tipomovimentocontabil> {
    const result = await this.tipomovimentocontabilRepository.update({ id: id }, updateTipomovimentocontabilDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipomovimentocontabil with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipomovimentocontabilRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipomovimentocontabil with id "${id}" not found`);
    }
  }
}
