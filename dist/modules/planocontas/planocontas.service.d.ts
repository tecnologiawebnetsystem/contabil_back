import { Repository } from 'typeorm';
import { Planocontas } from './entities/planocontas.entity';
import { CreatePlanocontasDto } from './dto/create-planocontas.dto';
import { UpdatePlanocontasDto } from './dto/update-planocontas.dto';
export declare class PlanocontasService {
    private readonly planocontasRepository;
    constructor(planocontasRepository: Repository<Planocontas>);
    create(createPlanocontasDto: CreatePlanocontasDto): Promise<Planocontas>;
    findAll(): Promise<Planocontas[]>;
    findOne(ContaID: any): Promise<Planocontas>;
    update(ContaID: any, updatePlanocontasDto: UpdatePlanocontasDto): Promise<Planocontas>;
    remove(ContaID: any): Promise<void>;
}
