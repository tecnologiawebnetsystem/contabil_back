import { RamocontabilService } from './ramocontabil.service';
import { CreateRamocontabilDto } from './dto/create-ramocontabil.dto';
import { UpdateRamocontabilDto } from './dto/update-ramocontabil.dto';
export declare class RamocontabilController {
    private readonly ramocontabilService;
    constructor(ramocontabilService: RamocontabilService);
    create(createRamocontabilDto: CreateRamocontabilDto): Promise<import("./entities/ramocontabil.entity").Ramocontabil>;
    findAll(): Promise<import("./entities/ramocontabil.entity").Ramocontabil[]>;
    findOne(id: string): Promise<import("./entities/ramocontabil.entity").Ramocontabil>;
    update(id: string, updateRamocontabilDto: UpdateRamocontabilDto): Promise<import("./entities/ramocontabil.entity").Ramocontabil>;
    remove(id: string): Promise<void>;
}
