import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tabuabiometrica } from './entities/tabuabiometrica.entity';
import { CreateTabuabiometricaDto } from './dto/create-tabuabiometrica.dto';
import { UpdateTabuabiometricaDto } from './dto/update-tabuabiometrica.dto';

@Injectable()
export class TabuabiometricaService {
  constructor(
    @InjectRepository(Tabuabiometrica)
    private readonly tabuabiometricaRepository: Repository<Tabuabiometrica>,
  ) {}

  async create(createTabuabiometricaDto: CreateTabuabiometricaDto): Promise<Tabuabiometrica> {
    const newTabuabiometrica = this.tabuabiometricaRepository.create(createTabuabiometricaDto);
    return this.tabuabiometricaRepository.save(newTabuabiometrica);
  }

  async findAll(): Promise<Tabuabiometrica[]> {
    return this.tabuabiometricaRepository.find();
  }

  async findOne(id: any): Promise<Tabuabiometrica> {
    const found = await this.tabuabiometricaRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Tabuabiometrica with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateTabuabiometricaDto: UpdateTabuabiometricaDto): Promise<Tabuabiometrica> {
    const result = await this.tabuabiometricaRepository.update({ id: id }, updateTabuabiometricaDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tabuabiometrica with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.tabuabiometricaRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Tabuabiometrica with id "${id}" not found`);
    }
  }
}
