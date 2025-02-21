import { TipopessoaseguroService } from './tipopessoaseguro.service';
import { CreateTipopessoaseguroDto } from './dto/create-tipopessoaseguro.dto';
import { UpdateTipopessoaseguroDto } from './dto/update-tipopessoaseguro.dto';
export declare class TipopessoaseguroController {
    private readonly tipopessoaseguroService;
    constructor(tipopessoaseguroService: TipopessoaseguroService);
    create(createTipopessoaseguroDto: CreateTipopessoaseguroDto): Promise<import("./entities/tipopessoaseguro.entity").Tipopessoaseguro>;
    findAll(): Promise<import("./entities/tipopessoaseguro.entity").Tipopessoaseguro[]>;
    findOne(id: string): Promise<import("./entities/tipopessoaseguro.entity").Tipopessoaseguro>;
    update(id: string, updateTipopessoaseguroDto: UpdateTipopessoaseguroDto): Promise<import("./entities/tipopessoaseguro.entity").Tipopessoaseguro>;
    remove(id: string): Promise<void>;
}
