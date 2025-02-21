import { Repository } from 'typeorm';
import { Objetocontabilizacao } from './entities/objetocontabilizacao.entity';
import { CreateObjetocontabilizacaoDto } from './dto/create-objetocontabilizacao.dto';
import { UpdateObjetocontabilizacaoDto } from './dto/update-objetocontabilizacao.dto';
export declare class ObjetocontabilizacaoService {
    private readonly objetocontabilizacaoRepository;
    constructor(objetocontabilizacaoRepository: Repository<Objetocontabilizacao>);
    create(createObjetocontabilizacaoDto: CreateObjetocontabilizacaoDto): Promise<Objetocontabilizacao>;
    findAll(): Promise<Objetocontabilizacao[]>;
    findOne(id: any): Promise<Objetocontabilizacao>;
    update(id: any, updateObjetocontabilizacaoDto: UpdateObjetocontabilizacaoDto): Promise<Objetocontabilizacao>;
    remove(id: any): Promise<void>;
}
