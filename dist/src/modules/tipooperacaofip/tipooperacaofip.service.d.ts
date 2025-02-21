import { Repository } from 'typeorm';
import { Tipooperacaofip } from './entities/tipooperacaofip.entity';
import { CreateTipooperacaofipDto } from './dto/create-tipooperacaofip.dto';
import { UpdateTipooperacaofipDto } from './dto/update-tipooperacaofip.dto';
export declare class TipooperacaofipService {
    private readonly tipooperacaofipRepository;
    constructor(tipooperacaofipRepository: Repository<Tipooperacaofip>);
    create(createTipooperacaofipDto: CreateTipooperacaofipDto): Promise<Tipooperacaofip>;
    findAll(): Promise<Tipooperacaofip[]>;
    findOne(id: any): Promise<Tipooperacaofip>;
    update(id: any, updateTipooperacaofipDto: UpdateTipooperacaofipDto): Promise<Tipooperacaofip>;
    remove(id: any): Promise<void>;
}
