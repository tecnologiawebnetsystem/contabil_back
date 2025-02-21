import { MescontabilService } from './mescontabil.service';
import { CreateMescontabilDto } from './dto/create-mescontabil.dto';
import { UpdateMescontabilDto } from './dto/update-mescontabil.dto';
export declare class MescontabilController {
    private readonly mescontabilService;
    constructor(mescontabilService: MescontabilService);
    create(createMescontabilDto: CreateMescontabilDto): Promise<import("./entities/mescontabil.entity").Mescontabil>;
    findAll(): Promise<import("./entities/mescontabil.entity").Mescontabil[]>;
    findOne(id: string): Promise<import("./entities/mescontabil.entity").Mescontabil>;
    update(id: string, updateMescontabilDto: UpdateMescontabilDto): Promise<import("./entities/mescontabil.entity").Mescontabil>;
    remove(id: string): Promise<void>;
}
