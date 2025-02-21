import { TipopagamentoService } from './tipopagamento.service';
import { CreateTipopagamentoDto } from './dto/create-tipopagamento.dto';
import { UpdateTipopagamentoDto } from './dto/update-tipopagamento.dto';
export declare class TipopagamentoController {
    private readonly tipopagamentoService;
    constructor(tipopagamentoService: TipopagamentoService);
    create(createTipopagamentoDto: CreateTipopagamentoDto): Promise<import("./entities/tipopagamento.entity").Tipopagamento>;
    findAll(): Promise<import("./entities/tipopagamento.entity").Tipopagamento[]>;
    findOne(id: string): Promise<import("./entities/tipopagamento.entity").Tipopagamento>;
    update(id: string, updateTipopagamentoDto: UpdateTipopagamentoDto): Promise<import("./entities/tipopagamento.entity").Tipopagamento>;
    remove(id: string): Promise<void>;
}
