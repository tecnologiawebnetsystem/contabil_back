import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipocontratoresseguro } from './entities/tipocontratoresseguro.entity';
import { CreateTipocontratoresseguroDto } from './dto/create-tipocontratoresseguro.dto';
import { UpdateTipocontratoresseguroDto } from './dto/update-tipocontratoresseguro.dto';

@Injectable()
export class TipocontratoresseguroService {
  constructor(
    @InjectRepository(Tipocontratoresseguro)
    private readonly tipocontratoresseguroRepository: Repository<Tipocontratoresseguro>,
  ) {}

  async create(createTipocontratoresseguroDto: CreateTipocontratoresseguroDto): Promise<Tipocontratoresseguro> {
    const newTipocontratoresseguro = this.tipocontratoresseguroRepository.create(createTipocontratoresseguroDto);
    return this.tipocontratoresseguroRepository.save(newTipocontratoresseguro);
  }

  async findAll(): Promise<Tipocontratoresseguro[]> {
    return this.tipocontratoresseguroRepository.find();
  }

  async findOne(id: any): Promise<Tipocontratoresseguro> {
    const found = await this.tipocontratoresseguroRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipocontratoresseguro with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipocontratoresseguroDto: UpdateTipocontratoresseguroDto): Promise<Tipocontratoresseguro> {
    const result = await this.tipocontratoresseguroRepository.update({ id: id }, updateTipocontratoresseguroDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipocontratoresseguro with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipocontratoresseguroRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipocontratoresseguro with id "${id}" not found`);
    }
  }
}
