import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipoapolice } from './entities/tipoapolice.entity';
import { CreateTipoapoliceDto } from './dto/create-tipoapolice.dto';
import { UpdateTipoapoliceDto } from './dto/update-tipoapolice.dto';

@Injectable()
export class TipoapoliceService {
  constructor(
    @InjectRepository(Tipoapolice)
    private readonly tipoapoliceRepository: Repository<Tipoapolice>,
  ) {}

  async create(createTipoapoliceDto: CreateTipoapoliceDto): Promise<Tipoapolice> {
    const newTipoapolice = this.tipoapoliceRepository.create(createTipoapoliceDto);
    return this.tipoapoliceRepository.save(newTipoapolice);
  }

  async findAll(): Promise<Tipoapolice[]> {
    return this.tipoapoliceRepository.find();
  }

  async findOne(id: any): Promise<Tipoapolice> {
    const found = await this.tipoapoliceRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipoapolice with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipoapoliceDto: UpdateTipoapoliceDto): Promise<Tipoapolice> {
    const result = await this.tipoapoliceRepository.update({ id: id }, updateTipoapoliceDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipoapolice with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipoapoliceRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipoapolice with id "${id}" not found`);
    }
  }
}
