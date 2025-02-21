import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tiponaturezacontabilizacao } from './entities/tiponaturezacontabilizacao.entity';
import { CreateTiponaturezacontabilizacaoDto } from './dto/create-tiponaturezacontabilizacao.dto';
import { UpdateTiponaturezacontabilizacaoDto } from './dto/update-tiponaturezacontabilizacao.dto';

@Injectable()
export class TiponaturezacontabilizacaoService {
  constructor(
    @InjectRepository(Tiponaturezacontabilizacao)
    private readonly tiponaturezacontabilizacaoRepository: Repository<Tiponaturezacontabilizacao>,
  ) {}

  async create(createTiponaturezacontabilizacaoDto: CreateTiponaturezacontabilizacaoDto): Promise<Tiponaturezacontabilizacao> {
    const newTiponaturezacontabilizacao = this.tiponaturezacontabilizacaoRepository.create(createTiponaturezacontabilizacaoDto);
    return this.tiponaturezacontabilizacaoRepository.save(newTiponaturezacontabilizacao);
  }

  async findAll(): Promise<Tiponaturezacontabilizacao[]> {
    return this.tiponaturezacontabilizacaoRepository.find();
  }

  async findOne(id: any): Promise<Tiponaturezacontabilizacao> {
    const found = await this.tiponaturezacontabilizacaoRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tiponaturezacontabilizacao with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTiponaturezacontabilizacaoDto: UpdateTiponaturezacontabilizacaoDto): Promise<Tiponaturezacontabilizacao> {
    const result = await this.tiponaturezacontabilizacaoRepository.update({ id: id }, updateTiponaturezacontabilizacaoDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tiponaturezacontabilizacao with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tiponaturezacontabilizacaoRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tiponaturezacontabilizacao with id "${id}" not found`);
    }
  }
}
