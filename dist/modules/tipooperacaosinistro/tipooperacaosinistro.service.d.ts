import { Repository } from 'typeorm';
import { Tipooperacaosinistro } from './entities/tipooperacaosinistro.entity';
import { CreateTipooperacaosinistroDto } from './dto/create-tipooperacaosinistro.dto';
import { UpdateTipooperacaosinistroDto } from './dto/update-tipooperacaosinistro.dto';
export declare class TipooperacaosinistroService {
    private readonly tipooperacaosinistroRepository;
    constructor(tipooperacaosinistroRepository: Repository<Tipooperacaosinistro>);
    create(createTipooperacaosinistroDto: CreateTipooperacaosinistroDto): Promise<Tipooperacaosinistro>;
    findAll(): Promise<Tipooperacaosinistro[]>;
    findOne(id: any): Promise<Tipooperacaosinistro>;
    update(id: any, updateTipooperacaosinistroDto: UpdateTipooperacaosinistroDto): Promise<Tipooperacaosinistro>;
    remove(id: any): Promise<void>;
}
