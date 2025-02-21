import { Repository } from 'typeorm';
import { Tiporesseguro } from './entities/tiporesseguro.entity';
import { CreateTiporesseguroDto } from './dto/create-tiporesseguro.dto';
import { UpdateTiporesseguroDto } from './dto/update-tiporesseguro.dto';
export declare class TiporesseguroService {
    private readonly tiporesseguroRepository;
    constructor(tiporesseguroRepository: Repository<Tiporesseguro>);
    create(createTiporesseguroDto: CreateTiporesseguroDto): Promise<Tiporesseguro>;
    findAll(): Promise<Tiporesseguro[]>;
    findOne(id: any): Promise<Tiporesseguro>;
    update(id: any, updateTiporesseguroDto: UpdateTiporesseguroDto): Promise<Tiporesseguro>;
    remove(id: any): Promise<void>;
}
