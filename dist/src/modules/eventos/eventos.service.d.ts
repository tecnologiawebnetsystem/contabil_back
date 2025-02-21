import { Repository } from 'typeorm';
import { Eventos } from './entities/eventos.entity';
import { CreateEventosDto } from './dto/create-eventos.dto';
import { UpdateEventosDto } from './dto/update-eventos.dto';
export declare class EventosService {
    private readonly eventosRepository;
    constructor(eventosRepository: Repository<Eventos>);
    create(createEventosDto: CreateEventosDto): Promise<Eventos>;
    findAll(): Promise<Eventos[]>;
    findOne(id: any): Promise<Eventos>;
    update(id: any, updateEventosDto: UpdateEventosDto): Promise<Eventos>;
    remove(id: any): Promise<void>;
}
