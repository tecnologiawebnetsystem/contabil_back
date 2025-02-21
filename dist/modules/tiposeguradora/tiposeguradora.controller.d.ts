import { TiposeguradoraService } from './tiposeguradora.service';
import { CreateTiposeguradoraDto } from './dto/create-tiposeguradora.dto';
import { UpdateTiposeguradoraDto } from './dto/update-tiposeguradora.dto';
export declare class TiposeguradoraController {
    private readonly tiposeguradoraService;
    constructor(tiposeguradoraService: TiposeguradoraService);
    create(createTiposeguradoraDto: CreateTiposeguradoraDto): Promise<import("./entities/tiposeguradora.entity").Tiposeguradora>;
    findAll(): Promise<import("./entities/tiposeguradora.entity").Tiposeguradora[]>;
    findOne(id: string): Promise<import("./entities/tiposeguradora.entity").Tiposeguradora>;
    update(id: string, updateTiposeguradoraDto: UpdateTiposeguradoraDto): Promise<import("./entities/tiposeguradora.entity").Tiposeguradora>;
    remove(id: string): Promise<void>;
}
