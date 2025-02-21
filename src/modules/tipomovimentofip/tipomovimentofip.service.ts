import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipomovimentofip } from './entities/tipomovimentofip.entity';
import { CreateTipomovimentofipDto } from './dto/create-tipomovimentofip.dto';
import { UpdateTipomovimentofipDto } from './dto/update-tipomovimentofip.dto';

@Injectable()
export class TipomovimentofipService {
  constructor(
    @InjectRepository(Tipomovimentofip)
    private readonly tipomovimentofipRepository: Repository<Tipomovimentofip>,
  ) {}

  async create(createTipomovimentofipDto: CreateTipomovimentofipDto): Promise<Tipomovimentofip> {
    const newTipomovimentofip = this.tipomovimentofipRepository.create(createTipomovimentofipDto);
    return this.tipomovimentofipRepository.save(newTipomovimentofip);
  }

  async findAll(): Promise<Tipomovimentofip[]> {
    return this.tipomovimentofipRepository.find();
  }

  async findOne(id: any): Promise<Tipomovimentofip> {
    const found = await this.tipomovimentofipRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipomovimentofip with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipomovimentofipDto: UpdateTipomovimentofipDto): Promise<Tipomovimentofip> {
    const result = await this.tipomovimentofipRepository.update({ id: id }, updateTipomovimentofipDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipomovimentofip with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipomovimentofipRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipomovimentofip with id "${id}" not found`);
    }
  }
}
