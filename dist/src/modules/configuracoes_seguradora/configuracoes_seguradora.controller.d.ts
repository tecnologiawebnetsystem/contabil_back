import { Configuracoes_seguradoraService } from './configuracoes_seguradora.service';
import { CreateConfiguracoes_seguradoraDto } from './dto/create-configuracoes_seguradora.dto';
import { UpdateConfiguracoes_seguradoraDto } from './dto/update-configuracoes_seguradora.dto';
export declare class Configuracoes_seguradoraController {
    private readonly configuracoes_seguradoraService;
    constructor(configuracoes_seguradoraService: Configuracoes_seguradoraService);
    create(createConfiguracoes_seguradoraDto: CreateConfiguracoes_seguradoraDto): Promise<import("./entities/configuracoes_seguradora.entity").Configuracoes_seguradora>;
    findAll(): Promise<import("./entities/configuracoes_seguradora.entity").Configuracoes_seguradora[]>;
    findOne(id: string): Promise<import("./entities/configuracoes_seguradora.entity").Configuracoes_seguradora>;
    update(id: string, updateConfiguracoes_seguradoraDto: UpdateConfiguracoes_seguradoraDto): Promise<import("./entities/configuracoes_seguradora.entity").Configuracoes_seguradora>;
    remove(id: string): Promise<void>;
}
