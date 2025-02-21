import { CompanhiassegurosService } from './companhiasseguros.service';
import { CreateCompanhiassegurosDto } from './dto/create-companhiasseguros.dto';
import { UpdateCompanhiassegurosDto } from './dto/update-companhiasseguros.dto';
export declare class CompanhiassegurosController {
    private readonly companhiassegurosService;
    constructor(companhiassegurosService: CompanhiassegurosService);
    create(createCompanhiassegurosDto: CreateCompanhiassegurosDto): Promise<import("./entities/companhiasseguros.entity").Companhiasseguros>;
    findAll(): Promise<import("./entities/companhiasseguros.entity").Companhiasseguros[]>;
    findOne(id: string): Promise<import("./entities/companhiasseguros.entity").Companhiasseguros>;
    update(id: string, updateCompanhiassegurosDto: UpdateCompanhiassegurosDto): Promise<import("./entities/companhiasseguros.entity").Companhiasseguros>;
    remove(id: string): Promise<void>;
}
