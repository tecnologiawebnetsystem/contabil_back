import { TipooperacaofipService } from './tipooperacaofip.service';
import { CreateTipooperacaofipDto } from './dto/create-tipooperacaofip.dto';
import { UpdateTipooperacaofipDto } from './dto/update-tipooperacaofip.dto';
export declare class TipooperacaofipController {
    private readonly tipooperacaofipService;
    constructor(tipooperacaofipService: TipooperacaofipService);
    create(createTipooperacaofipDto: CreateTipooperacaofipDto): Promise<import("./entities/tipooperacaofip.entity").Tipooperacaofip>;
    findAll(): Promise<import("./entities/tipooperacaofip.entity").Tipooperacaofip[]>;
    findOne(id: string): Promise<import("./entities/tipooperacaofip.entity").Tipooperacaofip>;
    update(id: string, updateTipooperacaofipDto: UpdateTipooperacaofipDto): Promise<import("./entities/tipooperacaofip.entity").Tipooperacaofip>;
    remove(id: string): Promise<void>;
}
