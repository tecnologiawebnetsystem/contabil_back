import { Repository } from 'typeorm';
import { Tipopessoaseguro } from './entities/tipopessoaseguro.entity';
import { CreateTipopessoaseguroDto } from './dto/create-tipopessoaseguro.dto';
import { UpdateTipopessoaseguroDto } from './dto/update-tipopessoaseguro.dto';
export declare class TipopessoaseguroService {
    private readonly tipopessoaseguroRepository;
    constructor(tipopessoaseguroRepository: Repository<Tipopessoaseguro>);
    create(createTipopessoaseguroDto: CreateTipopessoaseguroDto): Promise<Tipopessoaseguro>;
    findAll(): Promise<Tipopessoaseguro[]>;
    findOne(id: any): Promise<Tipopessoaseguro>;
    update(id: any, updateTipopessoaseguroDto: UpdateTipopessoaseguroDto): Promise<Tipopessoaseguro>;
    remove(id: any): Promise<void>;
}
