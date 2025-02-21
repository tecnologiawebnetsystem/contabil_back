import { Repository } from 'typeorm';
import { Configcontabil } from './entities/configcontabil.entity';
import { CreateConfigcontabilDto } from './dto/create-configcontabil.dto';
import { UpdateConfigcontabilDto } from './dto/update-configcontabil.dto';
export declare class ConfigcontabilService {
    private readonly configcontabilRepository;
    constructor(configcontabilRepository: Repository<Configcontabil>);
    create(createConfigcontabilDto: CreateConfigcontabilDto): Promise<Configcontabil>;
    findAll(): Promise<Configcontabil[]>;
    findOne(id: any): Promise<Configcontabil>;
    update(id: any, updateConfigcontabilDto: UpdateConfigcontabilDto): Promise<Configcontabil>;
    remove(id: any): Promise<void>;
}
