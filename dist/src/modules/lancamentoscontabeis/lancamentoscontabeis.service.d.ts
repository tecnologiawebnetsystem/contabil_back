import { Repository } from 'typeorm';
import { Lancamentoscontabeis } from './entities/lancamentoscontabeis.entity';
import { CreateLancamentoscontabeisDto } from './dto/create-lancamentoscontabeis.dto';
import { UpdateLancamentoscontabeisDto } from './dto/update-lancamentoscontabeis.dto';
export declare class LancamentoscontabeisService {
    private readonly lancamentoscontabeisRepository;
    constructor(lancamentoscontabeisRepository: Repository<Lancamentoscontabeis>);
    create(createLancamentoscontabeisDto: CreateLancamentoscontabeisDto): Promise<Lancamentoscontabeis>;
    findAll(): Promise<Lancamentoscontabeis[]>;
    findOne(LancamentoID: any): Promise<Lancamentoscontabeis>;
    update(LancamentoID: any, updateLancamentoscontabeisDto: UpdateLancamentoscontabeisDto): Promise<Lancamentoscontabeis>;
    remove(LancamentoID: any): Promise<void>;
}
