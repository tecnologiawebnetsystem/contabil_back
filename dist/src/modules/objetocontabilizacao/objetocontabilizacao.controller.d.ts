import { ObjetocontabilizacaoService } from './objetocontabilizacao.service';
import { CreateObjetocontabilizacaoDto } from './dto/create-objetocontabilizacao.dto';
import { UpdateObjetocontabilizacaoDto } from './dto/update-objetocontabilizacao.dto';
export declare class ObjetocontabilizacaoController {
    private readonly objetocontabilizacaoService;
    constructor(objetocontabilizacaoService: ObjetocontabilizacaoService);
    create(createObjetocontabilizacaoDto: CreateObjetocontabilizacaoDto): Promise<import("./entities/objetocontabilizacao.entity").Objetocontabilizacao>;
    findAll(): Promise<import("./entities/objetocontabilizacao.entity").Objetocontabilizacao[]>;
    findOne(id: string): Promise<import("./entities/objetocontabilizacao.entity").Objetocontabilizacao>;
    update(id: string, updateObjetocontabilizacaoDto: UpdateObjetocontabilizacaoDto): Promise<import("./entities/objetocontabilizacao.entity").Objetocontabilizacao>;
    remove(id: string): Promise<void>;
}
