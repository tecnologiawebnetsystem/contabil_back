import { Repository } from 'typeorm';
import { Contaauxiliar } from './entities/contaauxiliar.entity';
import { CreateContaauxiliarDto } from './dto/create-contaauxiliar.dto';
import { UpdateContaauxiliarDto } from './dto/update-contaauxiliar.dto';
export declare class ContaauxiliarService {
    private readonly contaauxiliarRepository;
    constructor(contaauxiliarRepository: Repository<Contaauxiliar>);
    create(createContaauxiliarDto: CreateContaauxiliarDto): Promise<Contaauxiliar>;
    findAll(): Promise<Contaauxiliar[]>;
    findOne(id: any): Promise<Contaauxiliar>;
    update(id: any, updateContaauxiliarDto: UpdateContaauxiliarDto): Promise<Contaauxiliar>;
    remove(id: any): Promise<void>;
}
