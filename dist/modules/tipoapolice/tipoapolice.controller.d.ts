import { TipoapoliceService } from './tipoapolice.service';
import { CreateTipoapoliceDto } from './dto/create-tipoapolice.dto';
import { UpdateTipoapoliceDto } from './dto/update-tipoapolice.dto';
export declare class TipoapoliceController {
    private readonly tipoapoliceService;
    constructor(tipoapoliceService: TipoapoliceService);
    create(createTipoapoliceDto: CreateTipoapoliceDto): Promise<import("./entities/tipoapolice.entity").Tipoapolice>;
    findAll(): Promise<import("./entities/tipoapolice.entity").Tipoapolice[]>;
    findOne(id: string): Promise<import("./entities/tipoapolice.entity").Tipoapolice>;
    update(id: string, updateTipoapoliceDto: UpdateTipoapoliceDto): Promise<import("./entities/tipoapolice.entity").Tipoapolice>;
    remove(id: string): Promise<void>;
}
