import { TbbalanceteService } from './tbbalancete.service';
import { CreateTbbalanceteDto } from './dto/create-tbbalancete.dto';
import { UpdateTbbalanceteDto } from './dto/update-tbbalancete.dto';
export declare class TbbalanceteController {
    private readonly tbbalanceteService;
    constructor(tbbalanceteService: TbbalanceteService);
    create(createTbbalanceteDto: CreateTbbalanceteDto): Promise<import("./entities/tbbalancete.entity").Tbbalancete>;
    findAll(): Promise<import("./entities/tbbalancete.entity").Tbbalancete[]>;
    findOne(id: string): Promise<import("./entities/tbbalancete.entity").Tbbalancete>;
    update(id: string, updateTbbalanceteDto: UpdateTbbalanceteDto): Promise<import("./entities/tbbalancete.entity").Tbbalancete>;
    remove(id: string): Promise<void>;
}
