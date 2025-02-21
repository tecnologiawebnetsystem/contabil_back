import { ContaauxiliarService } from './contaauxiliar.service';
import { CreateContaauxiliarDto } from './dto/create-contaauxiliar.dto';
import { UpdateContaauxiliarDto } from './dto/update-contaauxiliar.dto';
export declare class ContaauxiliarController {
    private readonly contaauxiliarService;
    constructor(contaauxiliarService: ContaauxiliarService);
    create(createContaauxiliarDto: CreateContaauxiliarDto): Promise<import("./entities/contaauxiliar.entity").Contaauxiliar>;
    findAll(): Promise<import("./entities/contaauxiliar.entity").Contaauxiliar[]>;
    findOne(id: string): Promise<import("./entities/contaauxiliar.entity").Contaauxiliar>;
    update(id: string, updateContaauxiliarDto: UpdateContaauxiliarDto): Promise<import("./entities/contaauxiliar.entity").Contaauxiliar>;
    remove(id: string): Promise<void>;
}
