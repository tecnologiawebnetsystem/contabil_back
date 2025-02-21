import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Eventos } from './entities/eventos.entity';
import { CreateEventosDto } from './dto/create-eventos.dto';
import { UpdateEventosDto } from './dto/update-eventos.dto';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Eventos)
    private readonly eventosRepository: Repository<Eventos>,
  ) {}

  async create(createEventosDto: CreateEventosDto): Promise<Eventos> {
    const newEventos = this.eventosRepository.create(createEventosDto);
    return this.eventosRepository.save(newEventos);
  }

  async findAll(): Promise<Eventos[]> {
    return this.eventosRepository.find();
  }

  async findOne(id: any): Promise<Eventos> {
    const found = await this.eventosRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Eventos with id "${id}" not found`);
    }
    return found;
  }

  async update(id: any, updateEventosDto: UpdateEventosDto): Promise<Eventos> {
    const result = await this.eventosRepository.update({ id: id }, updateEventosDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Eventos with id "${id}" not found`);
    }
    return this.findOne(id);
  }

  async remove(id: any): Promise<void> {
    const result = await this.eventosRepository.delete({ id: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Eventos with id "${id}" not found`);
    }
  }
}
