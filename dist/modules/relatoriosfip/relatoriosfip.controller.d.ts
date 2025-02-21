import { RelatoriosfipService } from './relatoriosfip.service';
import { CreateRelatoriosfipDto } from './dto/create-relatoriosfip.dto';
import { UpdateRelatoriosfipDto } from './dto/update-relatoriosfip.dto';
export declare class RelatoriosfipController {
    private readonly relatoriosfipService;
    constructor(relatoriosfipService: RelatoriosfipService);
    create(createRelatoriosfipDto: CreateRelatoriosfipDto): Promise<import("./entities/relatoriosfip.entity").Relatoriosfip>;
    findAll(): Promise<import("./entities/relatoriosfip.entity").Relatoriosfip[]>;
    findOne(id: string): Promise<import("./entities/relatoriosfip.entity").Relatoriosfip>;
    update(id: string, updateRelatoriosfipDto: UpdateRelatoriosfipDto): Promise<import("./entities/relatoriosfip.entity").Relatoriosfip>;
    remove(id: string): Promise<void>;
}
