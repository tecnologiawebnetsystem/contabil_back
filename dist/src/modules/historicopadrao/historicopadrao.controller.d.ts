import { HistoricopadraoService } from './historicopadrao.service';
import { CreateHistoricopadraoDto } from './dto/create-historicopadrao.dto';
import { UpdateHistoricopadraoDto } from './dto/update-historicopadrao.dto';
export declare class HistoricopadraoController {
    private readonly historicopadraoService;
    constructor(historicopadraoService: HistoricopadraoService);
    create(createHistoricopadraoDto: CreateHistoricopadraoDto): Promise<import("./entities/historicopadrao.entity").Historicopadrao>;
    findAll(): Promise<import("./entities/historicopadrao.entity").Historicopadrao[]>;
    findOne(id: string): Promise<import("./entities/historicopadrao.entity").Historicopadrao>;
    update(id: string, updateHistoricopadraoDto: UpdateHistoricopadraoDto): Promise<import("./entities/historicopadrao.entity").Historicopadrao>;
    remove(id: string): Promise<void>;
}
