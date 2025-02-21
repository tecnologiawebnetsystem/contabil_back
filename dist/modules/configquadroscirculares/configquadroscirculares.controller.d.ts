import { ConfigquadroscircularesService } from './configquadroscirculares.service';
import { CreateConfigquadroscircularesDto } from './dto/create-configquadroscirculares.dto';
import { UpdateConfigquadroscircularesDto } from './dto/update-configquadroscirculares.dto';
export declare class ConfigquadroscircularesController {
    private readonly configquadroscircularesService;
    constructor(configquadroscircularesService: ConfigquadroscircularesService);
    create(createConfigquadroscircularesDto: CreateConfigquadroscircularesDto): Promise<import("./entities/configquadroscirculares.entity").Configquadroscirculares>;
    findAll(): Promise<import("./entities/configquadroscirculares.entity").Configquadroscirculares[]>;
    findOne(id: string): Promise<import("./entities/configquadroscirculares.entity").Configquadroscirculares>;
    update(id: string, updateConfigquadroscircularesDto: UpdateConfigquadroscircularesDto): Promise<import("./entities/configquadroscirculares.entity").Configquadroscirculares>;
    remove(id: string): Promise<void>;
}
