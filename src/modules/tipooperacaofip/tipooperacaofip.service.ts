import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipooperacaofip } from './entities/tipooperacaofip.entity';
import { CreateTipooperacaofipDto } from './dto/create-tipooperacaofip.dto';
import { UpdateTipooperacaofipDto } from './dto/update-tipooperacaofip.dto';

@Injectable()
export class TipooperacaofipService {
  constructor(
    @InjectRepository(Tipooperacaofip)
    private readonly tipooperacaofipRepository: Repository<Tipooperacaofip>,
  ) {}

  async create(createTipooperacaofipDto: CreateTipooperacaofipDto): Promise<Tipooperacaofip> {
    const newTipooperacaofip = this.tipooperacaofipRepository.create(createTipooperacaofipDto);
    return this.tipooperacaofipRepository.save(newTipooperacaofip);
  }

  async findAll(): Promise<Tipooperacaofip[]> {
    return this.tipooperacaofipRepository.find();
  }

  async findOne(id: any): Promise<Tipooperacaofip> {
    const found = await this.tipooperacaofipRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipooperacaofip with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipooperacaofipDto: UpdateTipooperacaofipDto): Promise<Tipooperacaofip> {
    const result = await this.tipooperacaofipRepository.update({ id: id }, updateTipooperacaofipDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipooperacaofip with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipooperacaofipRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipooperacaofip with id "${id}" not found`);
    }
  }
}
