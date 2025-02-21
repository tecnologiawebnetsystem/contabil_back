import { LancamentoscontabeisService } from './lancamentoscontabeis.service';
import { CreateLancamentoscontabeisDto } from './dto/create-lancamentoscontabeis.dto';
import { UpdateLancamentoscontabeisDto } from './dto/update-lancamentoscontabeis.dto';
export declare class LancamentoscontabeisController {
    private readonly lancamentoscontabeisService;
    constructor(lancamentoscontabeisService: LancamentoscontabeisService);
    create(createLancamentoscontabeisDto: CreateLancamentoscontabeisDto): Promise<import("./entities/lancamentoscontabeis.entity").Lancamentoscontabeis>;
    findAll(): Promise<import("./entities/lancamentoscontabeis.entity").Lancamentoscontabeis[]>;
    findOne(id: string): Promise<import("./entities/lancamentoscontabeis.entity").Lancamentoscontabeis>;
    update(id: string, updateLancamentoscontabeisDto: UpdateLancamentoscontabeisDto): Promise<import("./entities/lancamentoscontabeis.entity").Lancamentoscontabeis>;
    remove(id: string): Promise<void>;
}
