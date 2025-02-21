import { TipooperacaosinistroService } from './tipooperacaosinistro.service';
import { CreateTipooperacaosinistroDto } from './dto/create-tipooperacaosinistro.dto';
import { UpdateTipooperacaosinistroDto } from './dto/update-tipooperacaosinistro.dto';
export declare class TipooperacaosinistroController {
    private readonly tipooperacaosinistroService;
    constructor(tipooperacaosinistroService: TipooperacaosinistroService);
    create(createTipooperacaosinistroDto: CreateTipooperacaosinistroDto): Promise<import("./entities/tipooperacaosinistro.entity").Tipooperacaosinistro>;
    findAll(): Promise<import("./entities/tipooperacaosinistro.entity").Tipooperacaosinistro[]>;
    findOne(id: string): Promise<import("./entities/tipooperacaosinistro.entity").Tipooperacaosinistro>;
    update(id: string, updateTipooperacaosinistroDto: UpdateTipooperacaosinistroDto): Promise<import("./entities/tipooperacaosinistro.entity").Tipooperacaosinistro>;
    remove(id: string): Promise<void>;
}
