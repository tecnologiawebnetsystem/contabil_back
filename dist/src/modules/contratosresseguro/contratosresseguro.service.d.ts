import { Repository } from 'typeorm';
import { Contratosresseguro } from './entities/contratosresseguro.entity';
import { CreateContratosresseguroDto } from './dto/create-contratosresseguro.dto';
import { UpdateContratosresseguroDto } from './dto/update-contratosresseguro.dto';
export declare class ContratosresseguroService {
    private readonly contratosresseguroRepository;
    constructor(contratosresseguroRepository: Repository<Contratosresseguro>);
    create(createContratosresseguroDto: CreateContratosresseguroDto): Promise<Contratosresseguro>;
    findAll(): Promise<Contratosresseguro[]>;
    findOne(ContratoID: any): Promise<Contratosresseguro>;
    update(ContratoID: any, updateContratosresseguroDto: UpdateContratosresseguroDto): Promise<Contratosresseguro>;
    remove(ContratoID: any): Promise<void>;
}
