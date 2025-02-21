import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Correntista } from './entities/correntista.entity';
import { CreateCorrentistaDto } from './dto/create-correntista.dto';
import { UpdateCorrentistaDto } from './dto/update-correntista.dto';

@Injectable()
export class CorrentistaService {
  constructor(
    @InjectRepository(Correntista)
    private readonly correntistaRepository: Repository<Correntista>,
  ) {}

  async create(createCorrentistaDto: CreateCorrentistaDto): Promise<Correntista> {
    const newCorrentista = this.correntistaRepository.create(createCorrentistaDto);
    return this.correntistaRepository.save(newCorrentista);
  }

  async findAll(): Promise<Correntista[]> {
    return this.correntistaRepository.find();
  }

  async findOne(id: any): Promise<Correntista> {
    const found = await this.correntistaRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Correntista with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateCorrentistaDto: UpdateCorrentistaDto): Promise<Correntista> {
    const result = await this.correntistaRepository.update({ id: id }, updateCorrentistaDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Correntista with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.correntistaRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Correntista with id "${id}" not found`);
    }
  }
}
