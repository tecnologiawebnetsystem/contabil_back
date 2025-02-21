import { TipomovimentofipService } from './tipomovimentofip.service';
import { CreateTipomovimentofipDto } from './dto/create-tipomovimentofip.dto';
import { UpdateTipomovimentofipDto } from './dto/update-tipomovimentofip.dto';
export declare class TipomovimentofipController {
    private readonly tipomovimentofipService;
    constructor(tipomovimentofipService: TipomovimentofipService);
    create(createTipomovimentofipDto: CreateTipomovimentofipDto): Promise<import("./entities/tipomovimentofip.entity").Tipomovimentofip>;
    findAll(): Promise<import("./entities/tipomovimentofip.entity").Tipomovimentofip[]>;
    findOne(id: string): Promise<import("./entities/tipomovimentofip.entity").Tipomovimentofip>;
    update(id: string, updateTipomovimentofipDto: UpdateTipomovimentofipDto): Promise<import("./entities/tipomovimentofip.entity").Tipomovimentofip>;
    remove(id: string): Promise<void>;
}
