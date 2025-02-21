import { Repository } from 'typeorm';
import { Ramocontabil } from './entities/ramocontabil.entity';
import { CreateRamocontabilDto } from './dto/create-ramocontabil.dto';
import { UpdateRamocontabilDto } from './dto/update-ramocontabil.dto';
export declare class RamocontabilService {
    private readonly ramocontabilRepository;
    constructor(ramocontabilRepository: Repository<Ramocontabil>);
    create(createRamocontabilDto: CreateRamocontabilDto): Promise<Ramocontabil>;
    findAll(): Promise<Ramocontabil[]>;
    findOne(id: any): Promise<Ramocontabil>;
    update(id: any, updateRamocontabilDto: UpdateRamocontabilDto): Promise<Ramocontabil>;
    remove(id: any): Promise<void>;
}
