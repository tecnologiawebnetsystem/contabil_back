import { PlanocontasService } from './planocontas.service';
import { CreatePlanocontasDto } from './dto/create-planocontas.dto';
import { UpdatePlanocontasDto } from './dto/update-planocontas.dto';
export declare class PlanocontasController {
    private readonly planocontasService;
    constructor(planocontasService: PlanocontasService);
    create(createPlanocontasDto: CreatePlanocontasDto): Promise<import("./entities/planocontas.entity").Planocontas>;
    findAll(): Promise<import("./entities/planocontas.entity").Planocontas[]>;
    findOne(id: string): Promise<import("./entities/planocontas.entity").Planocontas>;
    update(id: string, updatePlanocontasDto: UpdatePlanocontasDto): Promise<import("./entities/planocontas.entity").Planocontas>;
    remove(id: string): Promise<void>;
}
