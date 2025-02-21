import { Repository } from 'typeorm';
import { Tipocontratoresseguro } from './entities/tipocontratoresseguro.entity';
import { CreateTipocontratoresseguroDto } from './dto/create-tipocontratoresseguro.dto';
import { UpdateTipocontratoresseguroDto } from './dto/update-tipocontratoresseguro.dto';
export declare class TipocontratoresseguroService {
    private readonly tipocontratoresseguroRepository;
    constructor(tipocontratoresseguroRepository: Repository<Tipocontratoresseguro>);
    create(createTipocontratoresseguroDto: CreateTipocontratoresseguroDto): Promise<Tipocontratoresseguro>;
    findAll(): Promise<Tipocontratoresseguro[]>;
    findOne(id: any): Promise<Tipocontratoresseguro>;
    update(id: any, updateTipocontratoresseguroDto: UpdateTipocontratoresseguroDto): Promise<Tipocontratoresseguro>;
    remove(id: any): Promise<void>;
}
