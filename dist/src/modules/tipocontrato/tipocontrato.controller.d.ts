import { TipocontratoService } from './tipocontrato.service';
import { CreateTipocontratoDto } from './dto/create-tipocontrato.dto';
import { UpdateTipocontratoDto } from './dto/update-tipocontrato.dto';
export declare class TipocontratoController {
    private readonly tipocontratoService;
    constructor(tipocontratoService: TipocontratoService);
    create(createTipocontratoDto: CreateTipocontratoDto): Promise<import("./entities/tipocontrato.entity").Tipocontrato>;
    findAll(): Promise<import("./entities/tipocontrato.entity").Tipocontrato[]>;
    findOne(id: string): Promise<import("./entities/tipocontrato.entity").Tipocontrato>;
    update(id: string, updateTipocontratoDto: UpdateTipocontratoDto): Promise<import("./entities/tipocontrato.entity").Tipocontrato>;
    remove(id: string): Promise<void>;
}
