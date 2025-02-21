import { Repository } from 'typeorm';
import { Tipopessoa } from './entities/tipopessoa.entity';
import { CreateTipopessoaDto } from './dto/create-tipopessoa.dto';
import { UpdateTipopessoaDto } from './dto/update-tipopessoa.dto';
export declare class TipopessoaService {
    private readonly tipopessoaRepository;
    constructor(tipopessoaRepository: Repository<Tipopessoa>);
    create(createTipopessoaDto: CreateTipopessoaDto): Promise<Tipopessoa>;
    findAll(): Promise<Tipopessoa[]>;
    findOne(id: any): Promise<Tipopessoa>;
    update(id: any, updateTipopessoaDto: UpdateTipopessoaDto): Promise<Tipopessoa>;
    remove(id: any): Promise<void>;
}
