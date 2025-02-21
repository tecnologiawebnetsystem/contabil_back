import { Repository } from 'typeorm';
import { Relatoriosfip } from './entities/relatoriosfip.entity';
import { CreateRelatoriosfipDto } from './dto/create-relatoriosfip.dto';
import { UpdateRelatoriosfipDto } from './dto/update-relatoriosfip.dto';
export declare class RelatoriosfipService {
    private readonly relatoriosfipRepository;
    constructor(relatoriosfipRepository: Repository<Relatoriosfip>);
    create(createRelatoriosfipDto: CreateRelatoriosfipDto): Promise<Relatoriosfip>;
    findAll(): Promise<Relatoriosfip[]>;
    findOne(RelatorioID: any): Promise<Relatoriosfip>;
    update(RelatorioID: any, updateRelatoriosfipDto: UpdateRelatoriosfipDto): Promise<Relatoriosfip>;
    remove(RelatorioID: any): Promise<void>;
}
