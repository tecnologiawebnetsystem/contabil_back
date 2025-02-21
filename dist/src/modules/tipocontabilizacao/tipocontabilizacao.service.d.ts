import { Repository } from 'typeorm';
import { Tipocontabilizacao } from './entities/tipocontabilizacao.entity';
import { CreateTipocontabilizacaoDto } from './dto/create-tipocontabilizacao.dto';
import { UpdateTipocontabilizacaoDto } from './dto/update-tipocontabilizacao.dto';
export declare class TipocontabilizacaoService {
    private readonly tipocontabilizacaoRepository;
    constructor(tipocontabilizacaoRepository: Repository<Tipocontabilizacao>);
    create(createTipocontabilizacaoDto: CreateTipocontabilizacaoDto): Promise<Tipocontabilizacao>;
    findAll(): Promise<Tipocontabilizacao[]>;
    findOne(id: any): Promise<Tipocontabilizacao>;
    update(id: any, updateTipocontabilizacaoDto: UpdateTipocontabilizacaoDto): Promise<Tipocontabilizacao>;
    remove(id: any): Promise<void>;
}
