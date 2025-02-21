import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipopagamento } from './entities/tipopagamento.entity';
import { CreateTipopagamentoDto } from './dto/create-tipopagamento.dto';
import { UpdateTipopagamentoDto } from './dto/update-tipopagamento.dto';

@Injectable()
export class TipopagamentoService {
  constructor(
    @InjectRepository(Tipopagamento)
    private readonly tipopagamentoRepository: Repository<Tipopagamento>,
  ) {}

  async create(createTipopagamentoDto: CreateTipopagamentoDto): Promise<Tipopagamento> {
    const newTipopagamento = this.tipopagamentoRepository.create(createTipopagamentoDto);
    return this.tipopagamentoRepository.save(newTipopagamento);
  }

  async findAll(): Promise<Tipopagamento[]> {
    return this.tipopagamentoRepository.find();
  }

  async findOne(id: any): Promise<Tipopagamento> {
    const found = await this.tipopagamentoRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tipopagamento with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTipopagamentoDto: UpdateTipopagamentoDto): Promise<Tipopagamento> {
    const result = await this.tipopagamentoRepository.update({ id: id }, updateTipopagamentoDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tipopagamento with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tipopagamentoRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tipopagamento with id "${id}" not found`);
    }
  }
}
