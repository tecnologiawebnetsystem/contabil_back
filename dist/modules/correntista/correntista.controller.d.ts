import { CorrentistaService } from './correntista.service';
import { CreateCorrentistaDto } from './dto/create-correntista.dto';
import { UpdateCorrentistaDto } from './dto/update-correntista.dto';
export declare class CorrentistaController {
    private readonly correntistaService;
    constructor(correntistaService: CorrentistaService);
    create(createCorrentistaDto: CreateCorrentistaDto): Promise<import("./entities/correntista.entity").Correntista>;
    findAll(): Promise<import("./entities/correntista.entity").Correntista[]>;
    findOne(id: string): Promise<import("./entities/correntista.entity").Correntista>;
    update(id: string, updateCorrentistaDto: UpdateCorrentistaDto): Promise<import("./entities/correntista.entity").Correntista>;
    remove(id: string): Promise<void>;
}
