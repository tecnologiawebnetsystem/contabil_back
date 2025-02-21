import { TipopessoaService } from './tipopessoa.service';
import { CreateTipopessoaDto } from './dto/create-tipopessoa.dto';
import { UpdateTipopessoaDto } from './dto/update-tipopessoa.dto';
export declare class TipopessoaController {
    private readonly tipopessoaService;
    constructor(tipopessoaService: TipopessoaService);
    create(createTipopessoaDto: CreateTipopessoaDto): Promise<import("./entities/tipopessoa.entity").Tipopessoa>;
    findAll(): Promise<import("./entities/tipopessoa.entity").Tipopessoa[]>;
    findOne(id: string): Promise<import("./entities/tipopessoa.entity").Tipopessoa>;
    update(id: string, updateTipopessoaDto: UpdateTipopessoaDto): Promise<import("./entities/tipopessoa.entity").Tipopessoa>;
    remove(id: string): Promise<void>;
}
