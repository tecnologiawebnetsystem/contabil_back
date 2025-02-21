import { CircularesService } from './circulares.service';
import { CreateCircularesDto } from './dto/create-circulares.dto';
import { UpdateCircularesDto } from './dto/update-circulares.dto';
export declare class CircularesController {
    private readonly circularesService;
    constructor(circularesService: CircularesService);
    create(createCircularesDto: CreateCircularesDto): Promise<import("./entities/circulares.entity").Circulares>;
    findAll(): Promise<import("./entities/circulares.entity").Circulares[]>;
    findOne(id: string): Promise<import("./entities/circulares.entity").Circulares>;
    update(id: string, updateCircularesDto: UpdateCircularesDto): Promise<import("./entities/circulares.entity").Circulares>;
    remove(id: string): Promise<void>;
}
