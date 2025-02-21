import { Repository } from 'typeorm';
import { Mescontabil } from './entities/mescontabil.entity';
import { CreateMescontabilDto } from './dto/create-mescontabil.dto';
import { UpdateMescontabilDto } from './dto/update-mescontabil.dto';
export declare class MescontabilService {
    private readonly mescontabilRepository;
    constructor(mescontabilRepository: Repository<Mescontabil>);
    create(createMescontabilDto: CreateMescontabilDto): Promise<Mescontabil>;
    findAll(): Promise<Mescontabil[]>;
    findOne(id: any): Promise<Mescontabil>;
    update(id: any, updateMescontabilDto: UpdateMescontabilDto): Promise<Mescontabil>;
    remove(id: any): Promise<void>;
}
