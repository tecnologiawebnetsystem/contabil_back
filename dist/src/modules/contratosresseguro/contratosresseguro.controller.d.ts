import { ContratosresseguroService } from './contratosresseguro.service';
import { CreateContratosresseguroDto } from './dto/create-contratosresseguro.dto';
import { UpdateContratosresseguroDto } from './dto/update-contratosresseguro.dto';
export declare class ContratosresseguroController {
    private readonly contratosresseguroService;
    constructor(contratosresseguroService: ContratosresseguroService);
    create(createContratosresseguroDto: CreateContratosresseguroDto): Promise<import("./entities/contratosresseguro.entity").Contratosresseguro>;
    findAll(): Promise<import("./entities/contratosresseguro.entity").Contratosresseguro[]>;
    findOne(id: string): Promise<import("./entities/contratosresseguro.entity").Contratosresseguro>;
    update(id: string, updateContratosresseguroDto: UpdateContratosresseguroDto): Promise<import("./entities/contratosresseguro.entity").Contratosresseguro>;
    remove(id: string): Promise<void>;
}
