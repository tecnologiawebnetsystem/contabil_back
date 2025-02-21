import { EventosService } from './eventos.service';
import { CreateEventosDto } from './dto/create-eventos.dto';
import { UpdateEventosDto } from './dto/update-eventos.dto';
export declare class EventosController {
    private readonly eventosService;
    constructor(eventosService: EventosService);
    create(createEventosDto: CreateEventosDto): Promise<import("./entities/eventos.entity").Eventos>;
    findAll(): Promise<import("./entities/eventos.entity").Eventos[]>;
    findOne(id: string): Promise<import("./entities/eventos.entity").Eventos>;
    update(id: string, updateEventosDto: UpdateEventosDto): Promise<import("./entities/eventos.entity").Eventos>;
    remove(id: string): Promise<void>;
}
