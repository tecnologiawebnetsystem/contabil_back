import { Repository } from 'typeorm';
import { Configquadroscirculares } from './entities/configquadroscirculares.entity';
import { CreateConfigquadroscircularesDto } from './dto/create-configquadroscirculares.dto';
import { UpdateConfigquadroscircularesDto } from './dto/update-configquadroscirculares.dto';
export declare class ConfigquadroscircularesService {
    private readonly configquadroscircularesRepository;
    constructor(configquadroscircularesRepository: Repository<Configquadroscirculares>);
    create(createConfigquadroscircularesDto: CreateConfigquadroscircularesDto): Promise<Configquadroscirculares>;
    findAll(): Promise<Configquadroscirculares[]>;
    findOne(id: any): Promise<Configquadroscirculares>;
    update(id: any, updateConfigquadroscircularesDto: UpdateConfigquadroscircularesDto): Promise<Configquadroscirculares>;
    remove(id: any): Promise<void>;
}
