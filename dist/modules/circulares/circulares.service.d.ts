import { Repository } from 'typeorm';
import { Circulares } from './entities/circulares.entity';
import { CreateCircularesDto } from './dto/create-circulares.dto';
import { UpdateCircularesDto } from './dto/update-circulares.dto';
export declare class CircularesService {
    private readonly circularesRepository;
    constructor(circularesRepository: Repository<Circulares>);
    create(createCircularesDto: CreateCircularesDto): Promise<Circulares>;
    findAll(): Promise<Circulares[]>;
    findOne(id: any): Promise<Circulares>;
    update(id: any, updateCircularesDto: UpdateCircularesDto): Promise<Circulares>;
    remove(id: any): Promise<void>;
}
