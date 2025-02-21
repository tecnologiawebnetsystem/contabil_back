import { Repository } from 'typeorm';
import { Tipoapolice } from './entities/tipoapolice.entity';
import { CreateTipoapoliceDto } from './dto/create-tipoapolice.dto';
import { UpdateTipoapoliceDto } from './dto/update-tipoapolice.dto';
export declare class TipoapoliceService {
    private readonly tipoapoliceRepository;
    constructor(tipoapoliceRepository: Repository<Tipoapolice>);
    create(createTipoapoliceDto: CreateTipoapoliceDto): Promise<Tipoapolice>;
    findAll(): Promise<Tipoapolice[]>;
    findOne(id: any): Promise<Tipoapolice>;
    update(id: any, updateTipoapoliceDto: UpdateTipoapoliceDto): Promise<Tipoapolice>;
    remove(id: any): Promise<void>;
}
