import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Planocontas } from './entities/planocontas.entity';
import { CreatePlanocontasDto } from './dto/create-planocontas.dto';
import { UpdatePlanocontasDto } from './dto/update-planocontas.dto';

@Injectable()
export class PlanocontasService {
  constructor(
    @InjectRepository(Planocontas)
    private readonly planocontasRepository: Repository<Planocontas>,
  ) {}

  async create(createPlanocontasDto: CreatePlanocontasDto): Promise<Planocontas> {
    const newPlanocontas = this.planocontasRepository.create(createPlanocontasDto);
    return this.planocontasRepository.save(newPlanocontas);
  }

  async findAll(): Promise<Planocontas[]> {
    return this.planocontasRepository.find();
  }

  async findOne(ContaID: any): Promise<Planocontas> {
    const found = await this.planocontasRepository.findOne({ where: { ContaID: ContaID } });
    if (!found) {
      throw new NotFoundException(`Planocontas with ContaID "${ContaID}" not found`);
    }
    return found;
  }

  async update(ContaID: any, updatePlanocontasDto: UpdatePlanocontasDto): Promise<Planocontas> {
    const result = await this.planocontasRepository.update({ ContaID: ContaID }, updatePlanocontasDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Planocontas with ContaID "${ContaID}" not found`);
    }
    return this.findOne(ContaID);
  }

  async remove(ContaID: any): Promise<void> {
    const result = await this.planocontasRepository.delete({ ContaID: ContaID });
    if (result.affected === 0) {
      throw new NotFoundException(`Planocontas with ContaID "${ContaID}" not found`);
    }
  }
}
