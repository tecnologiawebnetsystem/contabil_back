import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lancamentoscontabeis } from './entities/lancamentoscontabeis.entity';
import { CreateLancamentoscontabeisDto } from './dto/create-lancamentoscontabeis.dto';
import { UpdateLancamentoscontabeisDto } from './dto/update-lancamentoscontabeis.dto';

@Injectable()
export class LancamentoscontabeisService {
  constructor(
    @InjectRepository(Lancamentoscontabeis)
    private readonly lancamentoscontabeisRepository: Repository<Lancamentoscontabeis>,
  ) {}

  async create(createLancamentoscontabeisDto: CreateLancamentoscontabeisDto): Promise<Lancamentoscontabeis> {
    const newLancamentoscontabeis = this.lancamentoscontabeisRepository.create(createLancamentoscontabeisDto);
    newLancamentoscontabeis.DataCriacao = new Date();
    return this.lancamentoscontabeisRepository.save(newLancamentoscontabeis);
  }

  async findAll(): Promise<Lancamentoscontabeis[]> {
    return this.lancamentoscontabeisRepository.find();
  }

  async findOne(LancamentoID: any): Promise<Lancamentoscontabeis> {
    const found = await this.lancamentoscontabeisRepository.findOne({ where: { LancamentoID: LancamentoID } });
    if (!found) {
      throw new NotFoundException(`Lancamentoscontabeis with LancamentoID "${LancamentoID}" not found`);
    }
    return found;
  }

  async update(LancamentoID: any, updateLancamentoscontabeisDto: UpdateLancamentoscontabeisDto): Promise<Lancamentoscontabeis> {
    const result = await this.lancamentoscontabeisRepository.update({ LancamentoID: LancamentoID }, updateLancamentoscontabeisDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Lancamentoscontabeis with LancamentoID "${LancamentoID}" not found`);
    }
    return this.findOne(LancamentoID);
  }

  async remove(LancamentoID: any): Promise<void> {
    const result = await this.lancamentoscontabeisRepository.delete({ LancamentoID: LancamentoID });
    if (result.affected === 0) {
      throw new NotFoundException(`Lancamentoscontabeis with LancamentoID "${LancamentoID}" not found`);
    }
  }
}
