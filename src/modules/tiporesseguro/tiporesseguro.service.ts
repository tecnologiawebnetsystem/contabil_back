import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tiporesseguro } from './entities/tiporesseguro.entity';
import { CreateTiporesseguroDto } from './dto/create-tiporesseguro.dto';
import { UpdateTiporesseguroDto } from './dto/update-tiporesseguro.dto';

@Injectable()
export class TiporesseguroService {
  constructor(
    @InjectRepository(Tiporesseguro)
    private readonly tiporesseguroRepository: Repository<Tiporesseguro>,
  ) {}

  async create(createTiporesseguroDto: CreateTiporesseguroDto): Promise<Tiporesseguro> {
    const newTiporesseguro = this.tiporesseguroRepository.create(createTiporesseguroDto);
    return this.tiporesseguroRepository.save(newTiporesseguro);
  }

  async findAll(): Promise<Tiporesseguro[]> {
    return this.tiporesseguroRepository.find();
  }

  async findOne(id: any): Promise<Tiporesseguro> {
    const found = await this.tiporesseguroRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tiporesseguro with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTiporesseguroDto: UpdateTiporesseguroDto): Promise<Tiporesseguro> {
    const result = await this.tiporesseguroRepository.update({ id: id }, updateTiporesseguroDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tiporesseguro with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tiporesseguroRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tiporesseguro with id "${id}" not found`);
    }
  }
}
