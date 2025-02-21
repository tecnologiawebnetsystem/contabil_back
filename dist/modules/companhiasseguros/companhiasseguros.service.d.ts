import { Repository } from 'typeorm';
import { Companhiasseguros } from './entities/companhiasseguros.entity';
import { CreateCompanhiassegurosDto } from './dto/create-companhiasseguros.dto';
import { UpdateCompanhiassegurosDto } from './dto/update-companhiasseguros.dto';
export declare class CompanhiassegurosService {
    private readonly companhiassegurosRepository;
    constructor(companhiassegurosRepository: Repository<Companhiasseguros>);
    create(createCompanhiassegurosDto: CreateCompanhiassegurosDto): Promise<Companhiasseguros>;
    findAll(): Promise<Companhiasseguros[]>;
    findOne(CompanhiaID: any): Promise<Companhiasseguros>;
    update(CompanhiaID: any, updateCompanhiassegurosDto: UpdateCompanhiassegurosDto): Promise<Companhiasseguros>;
    remove(CompanhiaID: any): Promise<void>;
}
