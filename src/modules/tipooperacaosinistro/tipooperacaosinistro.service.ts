import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipooperacaosinistro } from './entities/tipooperacaosinistro.entity';
import { CreateTipooperacaosinistroDto } from './dto/create-tipooperacaosinistro.dto';
import { UpdateTipooperacaosinistroDto } from './dto/update-tipooperacaosinistro.dto';

@Injectable()
export class TipooperacaosinistroService {
  constructor(
    @InjectRepository(Tipooperacaosinistro)
    private readonly tipooperacaosinistroRepository: Repository<Tipooperacaosinistro>,
  ) {}

  async create(createTipooperacaosinistroDto: CreateTipooperacaosinistroDto): Promise<Tipooperacaosinistro> {
    const newTipooperacaosinistro = this.tipooperacaosinistroRepository.create(createTipooperacaosinistroDto);
    return this.tipooperacaosinistroRepository.save(newTipooperacaosinistro);
  }

  async findAll(): Promise<Tipooperacaosinistro[]> {
    return this.tipooperacaosinistroRepository.find();
  }

  async findOne(id: any): Promise<Tipooperacaosinistro> {
    const found = await this.tipooperacaosinistroRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipooperacaosinistro with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipooperacaosinistroDto: UpdateTipooperacaosinistroDto): Promise<Tipooperacaosinistro> {
    const result = await this.tipooperacaosinistroRepository.update({ id: id }, updateTipooperacaosinistroDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipooperacaosinistro with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipooperacaosinistroRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipooperacaosinistro with id "${id}" not found`);
    }
  }
}
