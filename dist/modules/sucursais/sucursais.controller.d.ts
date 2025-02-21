import { SucursaisService } from './sucursais.service';
import { CreateSucursaisDto } from './dto/create-sucursais.dto';
import { UpdateSucursaisDto } from './dto/update-sucursais.dto';
export declare class SucursaisController {
    private readonly sucursaisService;
    constructor(sucursaisService: SucursaisService);
    create(createSucursaisDto: CreateSucursaisDto): Promise<import("./entities/sucursais.entity").Sucursais>;
    findAll(): Promise<import("./entities/sucursais.entity").Sucursais[]>;
    findOne(id: string): Promise<import("./entities/sucursais.entity").Sucursais>;
    update(id: string, updateSucursaisDto: UpdateSucursaisDto): Promise<import("./entities/sucursais.entity").Sucursais>;
    remove(id: string): Promise<void>;
}
