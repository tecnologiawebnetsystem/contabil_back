import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sucursais } from './entities/sucursais.entity';
import { CreateSucursaisDto } from './dto/create-sucursais.dto';
import { UpdateSucursaisDto } from './dto/update-sucursais.dto';

@Injectable()
export class SucursaisService {
  constructor(
    @InjectRepository(Sucursais)
    private readonly sucursaisRepository: Repository<Sucursais>,
  ) {}

  async create(createSucursaisDto: CreateSucursaisDto): Promise<Sucursais> {
    const newSucursais = this.sucursaisRepository.create(createSucursaisDto);
    return this.sucursaisRepository.save(newSucursais);
  }

  async findAll(): Promise<Sucursais[]> {
    return this.sucursaisRepository.find();
  }

  async findOne(SucursalID: any): Promise<Sucursais> {
    const found = await this.sucursaisRepository.findOne({ where: { SucursalID: SucursalID } });
    if (!found) {
      throw new NotFoundException(`Sucursais with SucursalID "${SucursalID}" not found`);
    }
    return found;
  }

  async update(SucursalID: any, updateSucursaisDto: UpdateSucursaisDto): Promise<Sucursais> {
    const result = await this.sucursaisRepository.update({ SucursalID: SucursalID }, updateSucursaisDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Sucursais with SucursalID "${SucursalID}" not found`);
    }
    return this.findOne(SucursalID);
  }

  async remove(SucursalID: any): Promise<void> {
    const result = await this.sucursaisRepository.delete({ SucursalID: SucursalID });
    if (result.affected === 0) {
      throw new NotFoundException(`Sucursais with SucursalID "${SucursalID}" not found`);
    }
  }
}
