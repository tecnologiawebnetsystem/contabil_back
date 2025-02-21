import { Repository } from 'typeorm';
import { Historicopadrao } from './entities/historicopadrao.entity';
import { CreateHistoricopadraoDto } from './dto/create-historicopadrao.dto';
import { UpdateHistoricopadraoDto } from './dto/update-historicopadrao.dto';
export declare class HistoricopadraoService {
    private readonly historicopadraoRepository;
    constructor(historicopadraoRepository: Repository<Historicopadrao>);
    create(createHistoricopadraoDto: CreateHistoricopadraoDto): Promise<Historicopadrao>;
    findAll(): Promise<Historicopadrao[]>;
    findOne(id: any): Promise<Historicopadrao>;
    update(id: any, updateHistoricopadraoDto: UpdateHistoricopadraoDto): Promise<Historicopadrao>;
    remove(id: any): Promise<void>;
}
