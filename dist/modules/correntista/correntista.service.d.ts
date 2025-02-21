import { Repository } from 'typeorm';
import { Correntista } from './entities/correntista.entity';
import { CreateCorrentistaDto } from './dto/create-correntista.dto';
import { UpdateCorrentistaDto } from './dto/update-correntista.dto';
export declare class CorrentistaService {
    private readonly correntistaRepository;
    constructor(correntistaRepository: Repository<Correntista>);
    create(createCorrentistaDto: CreateCorrentistaDto): Promise<Correntista>;
    findAll(): Promise<Correntista[]>;
    findOne(id: any): Promise<Correntista>;
    update(id: any, updateCorrentistaDto: UpdateCorrentistaDto): Promise<Correntista>;
    remove(id: any): Promise<void>;
}
