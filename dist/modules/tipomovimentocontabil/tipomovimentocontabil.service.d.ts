import { Repository } from 'typeorm';
import { Tipomovimentocontabil } from './entities/tipomovimentocontabil.entity';
import { CreateTipomovimentocontabilDto } from './dto/create-tipomovimentocontabil.dto';
import { UpdateTipomovimentocontabilDto } from './dto/update-tipomovimentocontabil.dto';
export declare class TipomovimentocontabilService {
    private readonly tipomovimentocontabilRepository;
    constructor(tipomovimentocontabilRepository: Repository<Tipomovimentocontabil>);
    create(createTipomovimentocontabilDto: CreateTipomovimentocontabilDto): Promise<Tipomovimentocontabil>;
    findAll(): Promise<Tipomovimentocontabil[]>;
    findOne(id: any): Promise<Tipomovimentocontabil>;
    update(id: any, updateTipomovimentocontabilDto: UpdateTipomovimentocontabilDto): Promise<Tipomovimentocontabil>;
    remove(id: any): Promise<void>;
}
