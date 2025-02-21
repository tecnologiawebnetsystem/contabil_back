import { ProvisoestecnicasService } from './provisoestecnicas.service';
import { CreateProvisoestecnicasDto } from './dto/create-provisoestecnicas.dto';
import { UpdateProvisoestecnicasDto } from './dto/update-provisoestecnicas.dto';
export declare class ProvisoestecnicasController {
    private readonly provisoestecnicasService;
    constructor(provisoestecnicasService: ProvisoestecnicasService);
    create(createProvisoestecnicasDto: CreateProvisoestecnicasDto): Promise<import("./entities/provisoestecnicas.entity").Provisoestecnicas>;
    findAll(): Promise<import("./entities/provisoestecnicas.entity").Provisoestecnicas[]>;
    findOne(id: string): Promise<import("./entities/provisoestecnicas.entity").Provisoestecnicas>;
    update(id: string, updateProvisoestecnicasDto: UpdateProvisoestecnicasDto): Promise<import("./entities/provisoestecnicas.entity").Provisoestecnicas>;
    remove(id: string): Promise<void>;
}
