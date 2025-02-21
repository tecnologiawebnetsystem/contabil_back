import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Relatoriosfip } from './entities/relatoriosfip.entity';
import { CreateRelatoriosfipDto } from './dto/create-relatoriosfip.dto';
import { UpdateRelatoriosfipDto } from './dto/update-relatoriosfip.dto';

@Injectable()
export class RelatoriosfipService {
  constructor(
    @InjectRepository(Relatoriosfip)
    private readonly relatoriosfipRepository: Repository<Relatoriosfip>,
  ) {}

  async create(createRelatoriosfipDto: CreateRelatoriosfipDto): Promise<Relatoriosfip> {
    const newRelatoriosfip = this.relatoriosfipRepository.create(createRelatoriosfipDto);
    return this.relatoriosfipRepository.save(newRelatoriosfip);
  }

  async findAll(): Promise<Relatoriosfip[]> {
    return this.relatoriosfipRepository.find();
  }

  async findOne(RelatorioID: any): Promise<Relatoriosfip> {
    const found = await this.relatoriosfipRepository.findOne({ where: { RelatorioID: RelatorioID } });
    if (!found) {
      throw new NotFoundException(`Relatoriosfip with RelatorioID "${RelatorioID}" not found`);
    }
    return found;
  }

  async update(RelatorioID: any, updateRelatoriosfipDto: UpdateRelatoriosfipDto): Promise<Relatoriosfip> {
    const result = await this.relatoriosfipRepository.update({ RelatorioID: RelatorioID }, updateRelatoriosfipDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Relatoriosfip with RelatorioID "${RelatorioID}" not found`);
    }
    return this.findOne(RelatorioID);
  }

  async remove(RelatorioID: any): Promise<void> {
    const result = await this.relatoriosfipRepository.delete({ RelatorioID: RelatorioID });
    if (result.affected === 0) {
      throw new NotFoundException(`Relatoriosfip with RelatorioID "${RelatorioID}" not found`);
    }
  }
}
