import { TipomovimentocontabilService } from './tipomovimentocontabil.service';
import { CreateTipomovimentocontabilDto } from './dto/create-tipomovimentocontabil.dto';
import { UpdateTipomovimentocontabilDto } from './dto/update-tipomovimentocontabil.dto';
export declare class TipomovimentocontabilController {
    private readonly tipomovimentocontabilService;
    constructor(tipomovimentocontabilService: TipomovimentocontabilService);
    create(createTipomovimentocontabilDto: CreateTipomovimentocontabilDto): Promise<import("./entities/tipomovimentocontabil.entity").Tipomovimentocontabil>;
    findAll(): Promise<import("./entities/tipomovimentocontabil.entity").Tipomovimentocontabil[]>;
    findOne(id: string): Promise<import("./entities/tipomovimentocontabil.entity").Tipomovimentocontabil>;
    update(id: string, updateTipomovimentocontabilDto: UpdateTipomovimentocontabilDto): Promise<import("./entities/tipomovimentocontabil.entity").Tipomovimentocontabil>;
    remove(id: string): Promise<void>;
}
