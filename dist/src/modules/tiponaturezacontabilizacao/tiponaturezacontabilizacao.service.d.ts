import { Repository } from 'typeorm';
import { Tiponaturezacontabilizacao } from './entities/tiponaturezacontabilizacao.entity';
import { CreateTiponaturezacontabilizacaoDto } from './dto/create-tiponaturezacontabilizacao.dto';
import { UpdateTiponaturezacontabilizacaoDto } from './dto/update-tiponaturezacontabilizacao.dto';
export declare class TiponaturezacontabilizacaoService {
    private readonly tiponaturezacontabilizacaoRepository;
    constructor(tiponaturezacontabilizacaoRepository: Repository<Tiponaturezacontabilizacao>);
    create(createTiponaturezacontabilizacaoDto: CreateTiponaturezacontabilizacaoDto): Promise<Tiponaturezacontabilizacao>;
    findAll(): Promise<Tiponaturezacontabilizacao[]>;
    findOne(id: any): Promise<Tiponaturezacontabilizacao>;
    update(id: any, updateTiponaturezacontabilizacaoDto: UpdateTiponaturezacontabilizacaoDto): Promise<Tiponaturezacontabilizacao>;
    remove(id: any): Promise<void>;
}
