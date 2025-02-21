import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contratosresseguro } from './entities/contratosresseguro.entity';
import { CreateContratosresseguroDto } from './dto/create-contratosresseguro.dto';
import { UpdateContratosresseguroDto } from './dto/update-contratosresseguro.dto';

@Injectable()
export class ContratosresseguroService {
  constructor(
    @InjectRepository(Contratosresseguro)
    private readonly contratosresseguroRepository: Repository<Contratosresseguro>,
  ) {}

  async create(createContratosresseguroDto: CreateContratosresseguroDto): Promise<Contratosresseguro> {
    const newContratosresseguro = this.contratosresseguroRepository.create(createContratosresseguroDto);
    return this.contratosresseguroRepository.save(newContratosresseguro);
  }

  async findAll(): Promise<Contratosresseguro[]> {
    return this.contratosresseguroRepository.find();
  }

  async findOne(ContratoID: any): Promise<Contratosresseguro> {
    const found = await this.contratosresseguroRepository.findOne({ where: { ContratoID: ContratoID } });
    if (!found) {
      throw new NotFoundException(`Contratosresseguro with ContratoID "${ContratoID}" not found`);
    }
    return found;
  }

  async update(ContratoID: any, updateContratosresseguroDto: UpdateContratosresseguroDto): Promise<Contratosresseguro> {
    const result = await this.contratosresseguroRepository.update({ ContratoID: ContratoID }, updateContratosresseguroDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Contratosresseguro with ContratoID "${ContratoID}" not found`);
    }
    return this.findOne(ContratoID);
  }

  async remove(ContratoID: any): Promise<void> {
    const result = await this.contratosresseguroRepository.delete({ ContratoID: ContratoID });
    if (result.affected === 0) {
      throw new NotFoundException(`Contratosresseguro with ContratoID "${ContratoID}" not found`);
    }
  }
}
