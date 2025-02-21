import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contaauxiliar } from './entities/contaauxiliar.entity';
import { CreateContaauxiliarDto } from './dto/create-contaauxiliar.dto';
import { UpdateContaauxiliarDto } from './dto/update-contaauxiliar.dto';

@Injectable()
export class ContaauxiliarService {
  constructor(
    @InjectRepository(Contaauxiliar)
    private readonly contaauxiliarRepository: Repository<Contaauxiliar>,
  ) {}

  async create(createContaauxiliarDto: CreateContaauxiliarDto): Promise<Contaauxiliar> {
    const newContaauxiliar = this.contaauxiliarRepository.create(createContaauxiliarDto);
    return this.contaauxiliarRepository.save(newContaauxiliar);
  }

  async findAll(): Promise<Contaauxiliar[]> {
    return this.contaauxiliarRepository.find();
  }

  async findOne(id: any): Promise<Contaauxiliar> {
    const found = await this.contaauxiliarRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Contaauxiliar with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateContaauxiliarDto: UpdateContaauxiliarDto): Promise<Contaauxiliar> {
    const result = await this.contaauxiliarRepository.update({ id: id }, updateContaauxiliarDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Contaauxiliar with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.contaauxiliarRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Contaauxiliar with id "${id}" not found`);
    }
  }
}
