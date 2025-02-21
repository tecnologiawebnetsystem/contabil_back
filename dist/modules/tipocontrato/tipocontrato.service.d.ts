import { Repository } from 'typeorm';
import { Tipocontrato } from './entities/tipocontrato.entity';
import { CreateTipocontratoDto } from './dto/create-tipocontrato.dto';
import { UpdateTipocontratoDto } from './dto/update-tipocontrato.dto';
export declare class TipocontratoService {
    private readonly tipocontratoRepository;
    constructor(tipocontratoRepository: Repository<Tipocontrato>);
    create(createTipocontratoDto: CreateTipocontratoDto): Promise<Tipocontrato>;
    findAll(): Promise<Tipocontrato[]>;
    findOne(id: any): Promise<Tipocontrato>;
    update(id: any, updateTipocontratoDto: UpdateTipocontratoDto): Promise<Tipocontrato>;
    remove(id: any): Promise<void>;
}
