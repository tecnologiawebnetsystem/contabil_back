import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipocontrato } from './entities/tipocontrato.entity';
import { CreateTipocontratoDto } from './dto/create-tipocontrato.dto';
import { UpdateTipocontratoDto } from './dto/update-tipocontrato.dto';

@Injectable()
export class TipocontratoService {
  constructor(
    @InjectRepository(Tipocontrato)
    private readonly tipocontratoRepository: Repository<Tipocontrato>,
  ) {}

  async create(createTipocontratoDto: CreateTipocontratoDto): Promise<Tipocontrato> {
    const newTipocontrato = this.tipocontratoRepository.create(createTipocontratoDto);
    return this.tipocontratoRepository.save(newTipocontrato);
  }

  async findAll(): Promise<Tipocontrato[]> {
    return this.tipocontratoRepository.find();
  }

  async findOne(id: any): Promise<Tipocontrato> {
    const found = await this.tipocontratoRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipocontrato with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipocontratoDto: UpdateTipocontratoDto): Promise<Tipocontrato> {
    const result = await this.tipocontratoRepository.update({ id: id }, updateTipocontratoDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipocontrato with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipocontratoRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipocontrato with id "${id}" not found`);
    }
  }
}
