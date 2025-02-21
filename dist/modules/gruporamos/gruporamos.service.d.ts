import { Repository } from 'typeorm';
import { Gruporamos } from './entities/gruporamos.entity';
import { CreateGruporamosDto } from './dto/create-gruporamos.dto';
import { UpdateGruporamosDto } from './dto/update-gruporamos.dto';
export declare class GruporamosService {
    private readonly gruporamosRepository;
    constructor(gruporamosRepository: Repository<Gruporamos>);
    create(createGruporamosDto: CreateGruporamosDto): Promise<Gruporamos>;
    findAll(): Promise<Gruporamos[]>;
    findOne(id: any): Promise<Gruporamos>;
    update(id: any, updateGruporamosDto: UpdateGruporamosDto): Promise<Gruporamos>;
    remove(id: any): Promise<void>;
}
