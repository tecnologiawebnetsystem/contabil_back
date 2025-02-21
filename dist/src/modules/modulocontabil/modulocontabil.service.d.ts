import { Repository } from 'typeorm';
import { Modulocontabil } from './entities/modulocontabil.entity';
import { CreateModulocontabilDto } from './dto/create-modulocontabil.dto';
import { UpdateModulocontabilDto } from './dto/update-modulocontabil.dto';
export declare class ModulocontabilService {
    private readonly modulocontabilRepository;
    constructor(modulocontabilRepository: Repository<Modulocontabil>);
    create(createModulocontabilDto: CreateModulocontabilDto): Promise<Modulocontabil>;
    findAll(): Promise<Modulocontabil[]>;
    findOne(id: any): Promise<Modulocontabil>;
    update(id: any, updateModulocontabilDto: UpdateModulocontabilDto): Promise<Modulocontabil>;
    remove(id: any): Promise<void>;
}
