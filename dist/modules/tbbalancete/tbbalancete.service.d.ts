import { Repository } from 'typeorm';
import { Tbbalancete } from './entities/tbbalancete.entity';
import { CreateTbbalanceteDto } from './dto/create-tbbalancete.dto';
import { UpdateTbbalanceteDto } from './dto/update-tbbalancete.dto';
export declare class TbbalanceteService {
    private readonly tbbalanceteRepository;
    constructor(tbbalanceteRepository: Repository<Tbbalancete>);
    create(createTbbalanceteDto: CreateTbbalanceteDto): Promise<Tbbalancete>;
    findAll(): Promise<Tbbalancete[]>;
    findOne(id: any): Promise<Tbbalancete>;
    update(id: any, updateTbbalanceteDto: UpdateTbbalanceteDto): Promise<Tbbalancete>;
    remove(id: any): Promise<void>;
}
