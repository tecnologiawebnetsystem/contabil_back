import { ConfigcontabilService } from './configcontabil.service';
import { CreateConfigcontabilDto } from './dto/create-configcontabil.dto';
import { UpdateConfigcontabilDto } from './dto/update-configcontabil.dto';
export declare class ConfigcontabilController {
    private readonly configcontabilService;
    constructor(configcontabilService: ConfigcontabilService);
    create(createConfigcontabilDto: CreateConfigcontabilDto): Promise<import("./entities/configcontabil.entity").Configcontabil>;
    findAll(): Promise<import("./entities/configcontabil.entity").Configcontabil[]>;
    findOne(id: string): Promise<import("./entities/configcontabil.entity").Configcontabil>;
    update(id: string, updateConfigcontabilDto: UpdateConfigcontabilDto): Promise<import("./entities/configcontabil.entity").Configcontabil>;
    remove(id: string): Promise<void>;
}
