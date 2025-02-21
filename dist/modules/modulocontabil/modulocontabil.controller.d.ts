import { ModulocontabilService } from './modulocontabil.service';
import { CreateModulocontabilDto } from './dto/create-modulocontabil.dto';
import { UpdateModulocontabilDto } from './dto/update-modulocontabil.dto';
export declare class ModulocontabilController {
    private readonly modulocontabilService;
    constructor(modulocontabilService: ModulocontabilService);
    create(createModulocontabilDto: CreateModulocontabilDto): Promise<import("./entities/modulocontabil.entity").Modulocontabil>;
    findAll(): Promise<import("./entities/modulocontabil.entity").Modulocontabil[]>;
    findOne(id: string): Promise<import("./entities/modulocontabil.entity").Modulocontabil>;
    update(id: string, updateModulocontabilDto: UpdateModulocontabilDto): Promise<import("./entities/modulocontabil.entity").Modulocontabil>;
    remove(id: string): Promise<void>;
}
