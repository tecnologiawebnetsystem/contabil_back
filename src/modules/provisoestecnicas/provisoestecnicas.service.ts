import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provisoestecnicas } from './entities/provisoestecnicas.entity';
import { CreateProvisoestecnicasDto } from './dto/create-provisoestecnicas.dto';
import { UpdateProvisoestecnicasDto } from './dto/update-provisoestecnicas.dto';

@Injectable()
export class ProvisoestecnicasService {
  constructor(
    @InjectRepository(Provisoestecnicas)
    private readonly provisoestecnicasRepository: Repository<Provisoestecnicas>,
  ) {}

  async create(createProvisoestecnicasDto: CreateProvisoestecnicasDto): Promise<Provisoestecnicas> {
    const newProvisoestecnicas = this.provisoestecnicasRepository.create(createProvisoestecnicasDto);
    return this.provisoestecnicasRepository.save(newProvisoestecnicas);
  }

  async findAll(): Promise<Provisoestecnicas[]> {
    return this.provisoestecnicasRepository.find();
  }

  async findOne(ProvisaoID: any): Promise<Provisoestecnicas> {
    const found = await this.provisoestecnicasRepository.findOne({ where: { ProvisaoID: ProvisaoID } });
    if (!found) {
      throw new NotFoundException(`Provisoestecnicas with ProvisaoID "${ProvisaoID}" not found`);
    }
    return found;
  }

  async update(ProvisaoID: any, updateProvisoestecnicasDto: UpdateProvisoestecnicasDto): Promise<Provisoestecnicas> {
    const result = await this.provisoestecnicasRepository.update({ ProvisaoID: ProvisaoID }, updateProvisoestecnicasDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Provisoestecnicas with ProvisaoID "${ProvisaoID}" not found`);
    }
    return this.findOne(ProvisaoID);
  }

  async remove(ProvisaoID: any): Promise<void> {
    const result = await this.provisoestecnicasRepository.delete({ ProvisaoID: ProvisaoID });
    if (result.affected === 0) {
      throw new NotFoundException(`Provisoestecnicas with ProvisaoID "${ProvisaoID}" not found`);
    }
  }
}
