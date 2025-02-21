import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Companhiasseguros } from './entities/companhiasseguros.entity';
import { CreateCompanhiassegurosDto } from './dto/create-companhiasseguros.dto';
import { UpdateCompanhiassegurosDto } from './dto/update-companhiasseguros.dto';

@Injectable()
export class CompanhiassegurosService {
  constructor(
    @InjectRepository(Companhiasseguros)
    private readonly companhiassegurosRepository: Repository<Companhiasseguros>,
  ) {}

  async create(createCompanhiassegurosDto: CreateCompanhiassegurosDto): Promise<Companhiasseguros> {
    const newCompanhiasseguros = this.companhiassegurosRepository.create(createCompanhiassegurosDto);
    newCompanhiasseguros.DataCriacao = new Date();
    newCompanhiasseguros.DataAtualizacao = new Date();
    return this.companhiassegurosRepository.save(newCompanhiasseguros);
  }

  async findAll(): Promise<Companhiasseguros[]> {
    return this.companhiassegurosRepository.find();
  }

  async findOne(CompanhiaID: any): Promise<Companhiasseguros> {
    const found = await this.companhiassegurosRepository.findOne({ where: { CompanhiaID: CompanhiaID } });
    if (!found) {
      throw new NotFoundException(`Companhiasseguros with CompanhiaID "${CompanhiaID}" not found`);
    }
    return found;
  }

  async update(CompanhiaID: any, updateCompanhiassegurosDto: UpdateCompanhiassegurosDto): Promise<Companhiasseguros> {
    const result = await this.companhiassegurosRepository.update({ CompanhiaID: CompanhiaID }, updateCompanhiassegurosDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Companhiasseguros with CompanhiaID "${CompanhiaID}" not found`);
    }
    return this.findOne(CompanhiaID);
  }

  async remove(CompanhiaID: any): Promise<void> {
    const result = await this.companhiassegurosRepository.delete({ CompanhiaID: CompanhiaID });
    if (result.affected === 0) {
      throw new NotFoundException(`Companhiasseguros with CompanhiaID "${CompanhiaID}" not found`);
    }
  }
}
