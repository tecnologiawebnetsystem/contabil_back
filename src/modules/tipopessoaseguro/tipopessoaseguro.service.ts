import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipopessoaseguro } from './entities/tipopessoaseguro.entity';
import { CreateTipopessoaseguroDto } from './dto/create-tipopessoaseguro.dto';
import { UpdateTipopessoaseguroDto } from './dto/update-tipopessoaseguro.dto';

@Injectable()
export class TipopessoaseguroService {
  constructor(
    @InjectRepository(Tipopessoaseguro)
    private readonly tipopessoaseguroRepository: Repository<Tipopessoaseguro>,
  ) {}

  async create(createTipopessoaseguroDto: CreateTipopessoaseguroDto): Promise<Tipopessoaseguro> {
    const newTipopessoaseguro = this.tipopessoaseguroRepository.create(createTipopessoaseguroDto);
    return this.tipopessoaseguroRepository.save(newTipopessoaseguro);
  }

  async findAll(): Promise<Tipopessoaseguro[]> {
    return this.tipopessoaseguroRepository.find();
  }

  async findOne(id: any): Promise<Tipopessoaseguro> {
    const found = await this.tipopessoaseguroRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipopessoaseguro with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipopessoaseguroDto: UpdateTipopessoaseguroDto): Promise<Tipopessoaseguro> {
    const result = await this.tipopessoaseguroRepository.update({ id: id }, updateTipopessoaseguroDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipopessoaseguro with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipopessoaseguroRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipopessoaseguro with id "${id}" not found`);
    }
  }
}
