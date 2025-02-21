import { Repository } from 'typeorm';
import { Tipopagamento } from './entities/tipopagamento.entity';
import { CreateTipopagamentoDto } from './dto/create-tipopagamento.dto';
import { UpdateTipopagamentoDto } from './dto/update-tipopagamento.dto';
export declare class TipopagamentoService {
    private readonly tipopagamentoRepository;
    constructor(tipopagamentoRepository: Repository<Tipopagamento>);
    create(createTipopagamentoDto: CreateTipopagamentoDto): Promise<Tipopagamento>;
    findAll(): Promise<Tipopagamento[]>;
    findOne(id: any): Promise<Tipopagamento>;
    update(id: any, updateTipopagamentoDto: UpdateTipopagamentoDto): Promise<Tipopagamento>;
    remove(id: any): Promise<void>;
}
