import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipopessoa } from './entities/tipopessoa.entity';
import { CreateTipopessoaDto } from './dto/create-tipopessoa.dto';
import { UpdateTipopessoaDto } from './dto/update-tipopessoa.dto';

@Injectable()
export class TipopessoaService {
  constructor(
    @InjectRepository(Tipopessoa)
    private readonly tipopessoaRepository: Repository<Tipopessoa>,
  ) {}

  async create(createTipopessoaDto: CreateTipopessoaDto): Promise<Tipopessoa> {
    const newTipopessoa = this.tipopessoaRepository.create(createTipopessoaDto);
    return this.tipopessoaRepository.save(newTipopessoa);
  }

  async findAll(): Promise<Tipopessoa[]> {
    return this.tipopessoaRepository.find();
  }

  async findOne(id: any): Promise<Tipopessoa> {
    const found = await this.tipopessoaRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipopessoa with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipopessoaDto: UpdateTipopessoaDto): Promise<Tipopessoa> {
    const result = await this.tipopessoaRepository.update({ id: id }, updateTipopessoaDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipopessoa with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipopessoaRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipopessoa with id "${id}" not found`);
    }
  }
}
