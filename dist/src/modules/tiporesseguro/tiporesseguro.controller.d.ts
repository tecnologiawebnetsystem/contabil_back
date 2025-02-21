import { TiporesseguroService } from './tiporesseguro.service';
import { CreateTiporesseguroDto } from './dto/create-tiporesseguro.dto';
import { UpdateTiporesseguroDto } from './dto/update-tiporesseguro.dto';
export declare class TiporesseguroController {
    private readonly tiporesseguroService;
    constructor(tiporesseguroService: TiporesseguroService);
    create(createTiporesseguroDto: CreateTiporesseguroDto): Promise<import("./entities/tiporesseguro.entity").Tiporesseguro>;
    findAll(): Promise<import("./entities/tiporesseguro.entity").Tiporesseguro[]>;
    findOne(id: string): Promise<import("./entities/tiporesseguro.entity").Tiporesseguro>;
    update(id: string, updateTiporesseguroDto: UpdateTiporesseguroDto): Promise<import("./entities/tiporesseguro.entity").Tiporesseguro>;
    remove(id: string): Promise<void>;
}
