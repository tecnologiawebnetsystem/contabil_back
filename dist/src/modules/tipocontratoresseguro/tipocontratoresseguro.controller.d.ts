import { TipocontratoresseguroService } from './tipocontratoresseguro.service';
import { CreateTipocontratoresseguroDto } from './dto/create-tipocontratoresseguro.dto';
import { UpdateTipocontratoresseguroDto } from './dto/update-tipocontratoresseguro.dto';
export declare class TipocontratoresseguroController {
    private readonly tipocontratoresseguroService;
    constructor(tipocontratoresseguroService: TipocontratoresseguroService);
    create(createTipocontratoresseguroDto: CreateTipocontratoresseguroDto): Promise<import("./entities/tipocontratoresseguro.entity").Tipocontratoresseguro>;
    findAll(): Promise<import("./entities/tipocontratoresseguro.entity").Tipocontratoresseguro[]>;
    findOne(id: string): Promise<import("./entities/tipocontratoresseguro.entity").Tipocontratoresseguro>;
    update(id: string, updateTipocontratoresseguroDto: UpdateTipocontratoresseguroDto): Promise<import("./entities/tipocontratoresseguro.entity").Tipocontratoresseguro>;
    remove(id: string): Promise<void>;
}
