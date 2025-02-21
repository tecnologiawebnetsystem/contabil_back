import { Repository } from 'typeorm';
import { Tiposeguradora } from './entities/tiposeguradora.entity';
import { CreateTiposeguradoraDto } from './dto/create-tiposeguradora.dto';
import { UpdateTiposeguradoraDto } from './dto/update-tiposeguradora.dto';
export declare class TiposeguradoraService {
    private readonly tiposeguradoraRepository;
    constructor(tiposeguradoraRepository: Repository<Tiposeguradora>);
    create(createTiposeguradoraDto: CreateTiposeguradoraDto): Promise<Tiposeguradora>;
    findAll(): Promise<Tiposeguradora[]>;
    findOne(id: any): Promise<Tiposeguradora>;
    update(id: any, updateTiposeguradoraDto: UpdateTiposeguradoraDto): Promise<Tiposeguradora>;
    remove(id: any): Promise<void>;
}
