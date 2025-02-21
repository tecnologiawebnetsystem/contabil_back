import { Repository } from 'typeorm';
import { Configuracoes_seguradora } from './entities/configuracoes_seguradora.entity';
import { CreateConfiguracoes_seguradoraDto } from './dto/create-configuracoes_seguradora.dto';
import { UpdateConfiguracoes_seguradoraDto } from './dto/update-configuracoes_seguradora.dto';
export declare class Configuracoes_seguradoraService {
    private readonly configuracoes_seguradoraRepository;
    constructor(configuracoes_seguradoraRepository: Repository<Configuracoes_seguradora>);
    create(createConfiguracoes_seguradoraDto: CreateConfiguracoes_seguradoraDto): Promise<Configuracoes_seguradora>;
    findAll(): Promise<Configuracoes_seguradora[]>;
    findOne(id: any): Promise<Configuracoes_seguradora>;
    update(id: any, updateConfiguracoes_seguradoraDto: UpdateConfiguracoes_seguradoraDto): Promise<Configuracoes_seguradora>;
    remove(id: any): Promise<void>;
}
