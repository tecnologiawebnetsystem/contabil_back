import { Repository } from 'typeorm';
import { Tipomovimentofip } from './entities/tipomovimentofip.entity';
import { CreateTipomovimentofipDto } from './dto/create-tipomovimentofip.dto';
import { UpdateTipomovimentofipDto } from './dto/update-tipomovimentofip.dto';
export declare class TipomovimentofipService {
    private readonly tipomovimentofipRepository;
    constructor(tipomovimentofipRepository: Repository<Tipomovimentofip>);
    create(createTipomovimentofipDto: CreateTipomovimentofipDto): Promise<Tipomovimentofip>;
    findAll(): Promise<Tipomovimentofip[]>;
    findOne(id: any): Promise<Tipomovimentofip>;
    update(id: any, updateTipomovimentofipDto: UpdateTipomovimentofipDto): Promise<Tipomovimentofip>;
    remove(id: any): Promise<void>;
}
