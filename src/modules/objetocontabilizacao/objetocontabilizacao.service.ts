import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Objetocontabilizacao } from './entities/objetocontabilizacao.entity';
import { CreateObjetocontabilizacaoDto } from './dto/create-objetocontabilizacao.dto';
import { UpdateObjetocontabilizacaoDto } from './dto/update-objetocontabilizacao.dto';

@Injectable()
export class ObjetocontabilizacaoService {
  constructor(
    @InjectRepository(Objetocontabilizacao)
    private readonly objetocontabilizacaoRepository: Repository<Objetocontabilizacao>,
  ) {}

  async create(createObjetocontabilizacaoDto: CreateObjetocontabilizacaoDto): Promise<Objetocontabilizacao> {
    const newObjetocontabilizacao = this.objetocontabilizacaoRepository.create(createObjetocontabilizacaoDto);
    return this.objetocontabilizacaoRepository.save(newObjetocontabilizacao);
  }

  async findAll(): Promise<Objetocontabilizacao[]> {
    return this.objetocontabilizacaoRepository.find();
  }

  async findOne(id: any): Promise<Objetocontabilizacao> {
    const found = await this.objetocontabilizacaoRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Objetocontabilizacao with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateObjetocontabilizacaoDto: UpdateObjetocontabilizacaoDto): Promise<Objetocontabilizacao> {
    const result = await this.objetocontabilizacaoRepository.update({ id: id }, updateObjetocontabilizacaoDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Objetocontabilizacao with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.objetocontabilizacaoRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Objetocontabilizacao with id "${id}" not found`);
    }
  }
}
