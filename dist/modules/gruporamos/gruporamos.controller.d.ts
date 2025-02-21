import { GruporamosService } from './gruporamos.service';
import { CreateGruporamosDto } from './dto/create-gruporamos.dto';
import { UpdateGruporamosDto } from './dto/update-gruporamos.dto';
export declare class GruporamosController {
    private readonly gruporamosService;
    constructor(gruporamosService: GruporamosService);
    create(createGruporamosDto: CreateGruporamosDto): Promise<import("./entities/gruporamos.entity").Gruporamos>;
    findAll(): Promise<import("./entities/gruporamos.entity").Gruporamos[]>;
    findOne(id: string): Promise<import("./entities/gruporamos.entity").Gruporamos>;
    update(id: string, updateGruporamosDto: UpdateGruporamosDto): Promise<import("./entities/gruporamos.entity").Gruporamos>;
    remove(id: string): Promise<void>;
}
