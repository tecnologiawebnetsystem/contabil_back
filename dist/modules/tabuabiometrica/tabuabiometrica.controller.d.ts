import { TabuabiometricaService } from './tabuabiometrica.service';
import { CreateTabuabiometricaDto } from './dto/create-tabuabiometrica.dto';
import { UpdateTabuabiometricaDto } from './dto/update-tabuabiometrica.dto';
export declare class TabuabiometricaController {
    private readonly tabuabiometricaService;
    constructor(tabuabiometricaService: TabuabiometricaService);
    create(createTabuabiometricaDto: CreateTabuabiometricaDto): Promise<import("./entities/tabuabiometrica.entity").Tabuabiometrica>;
    findAll(): Promise<import("./entities/tabuabiometrica.entity").Tabuabiometrica[]>;
    findOne(id: string): Promise<import("./entities/tabuabiometrica.entity").Tabuabiometrica>;
    update(id: string, updateTabuabiometricaDto: UpdateTabuabiometricaDto): Promise<import("./entities/tabuabiometrica.entity").Tabuabiometrica>;
    remove(id: string): Promise<void>;
}
