import { TipocontabilizacaoService } from './tipocontabilizacao.service';
import { CreateTipocontabilizacaoDto } from './dto/create-tipocontabilizacao.dto';
import { UpdateTipocontabilizacaoDto } from './dto/update-tipocontabilizacao.dto';
export declare class TipocontabilizacaoController {
    private readonly tipocontabilizacaoService;
    constructor(tipocontabilizacaoService: TipocontabilizacaoService);
    create(createTipocontabilizacaoDto: CreateTipocontabilizacaoDto): Promise<import("./entities/tipocontabilizacao.entity").Tipocontabilizacao>;
    findAll(): Promise<import("./entities/tipocontabilizacao.entity").Tipocontabilizacao[]>;
    findOne(id: string): Promise<import("./entities/tipocontabilizacao.entity").Tipocontabilizacao>;
    update(id: string, updateTipocontabilizacaoDto: UpdateTipocontabilizacaoDto): Promise<import("./entities/tipocontabilizacao.entity").Tipocontabilizacao>;
    remove(id: string): Promise<void>;
}
