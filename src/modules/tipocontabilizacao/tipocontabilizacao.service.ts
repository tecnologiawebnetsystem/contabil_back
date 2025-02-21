import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipocontabilizacao } from './entities/tipocontabilizacao.entity';
import { CreateTipocontabilizacaoDto } from './dto/create-tipocontabilizacao.dto';
import { UpdateTipocontabilizacaoDto } from './dto/update-tipocontabilizacao.dto';

@Injectable()
export class TipocontabilizacaoService {
  constructor(
    @InjectRepository(Tipocontabilizacao)
    private readonly tipocontabilizacaoRepository: Repository<Tipocontabilizacao>,
  ) {}

  async create(createTipocontabilizacaoDto: CreateTipocontabilizacaoDto): Promise<Tipocontabilizacao> {
    const newTipocontabilizacao = this.tipocontabilizacaoRepository.create(createTipocontabilizacaoDto);
    return this.tipocontabilizacaoRepository.save(newTipocontabilizacao);
  }

  async findAll(): Promise<Tipocontabilizacao[]> {
    return this.tipocontabilizacaoRepository.find();
  }

  async findOne(id: any): Promise<Tipocontabilizacao> {
    const found = await this.tipocontabilizacaoRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipocontabilizacao with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipocontabilizacaoDto: UpdateTipocontabilizacaoDto): Promise<Tipocontabilizacao> {
    const result = await this.tipocontabilizacaoRepository.update({ id: id }, updateTipocontabilizacaoDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipocontabilizacao with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipocontabilizacaoRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipocontabilizacao with id "${id}" not found`);
    }
  }
}
