import { TiponaturezacontabilizacaoService } from './tiponaturezacontabilizacao.service';
import { CreateTiponaturezacontabilizacaoDto } from './dto/create-tiponaturezacontabilizacao.dto';
import { UpdateTiponaturezacontabilizacaoDto } from './dto/update-tiponaturezacontabilizacao.dto';
export declare class TiponaturezacontabilizacaoController {
    private readonly tiponaturezacontabilizacaoService;
    constructor(tiponaturezacontabilizacaoService: TiponaturezacontabilizacaoService);
    create(createTiponaturezacontabilizacaoDto: CreateTiponaturezacontabilizacaoDto): Promise<import("./entities/tiponaturezacontabilizacao.entity").Tiponaturezacontabilizacao>;
    findAll(): Promise<import("./entities/tiponaturezacontabilizacao.entity").Tiponaturezacontabilizacao[]>;
    findOne(id: string): Promise<import("./entities/tiponaturezacontabilizacao.entity").Tiponaturezacontabilizacao>;
    update(id: string, updateTiponaturezacontabilizacaoDto: UpdateTiponaturezacontabilizacaoDto): Promise<import("./entities/tiponaturezacontabilizacao.entity").Tiponaturezacontabilizacao>;
    remove(id: string): Promise<void>;
}
