import { Repository } from 'typeorm';
import { Provisoestecnicas } from './entities/provisoestecnicas.entity';
import { CreateProvisoestecnicasDto } from './dto/create-provisoestecnicas.dto';
import { UpdateProvisoestecnicasDto } from './dto/update-provisoestecnicas.dto';
export declare class ProvisoestecnicasService {
    private readonly provisoestecnicasRepository;
    constructor(provisoestecnicasRepository: Repository<Provisoestecnicas>);
    create(createProvisoestecnicasDto: CreateProvisoestecnicasDto): Promise<Provisoestecnicas>;
    findAll(): Promise<Provisoestecnicas[]>;
    findOne(ProvisaoID: any): Promise<Provisoestecnicas>;
    update(ProvisaoID: any, updateProvisoestecnicasDto: UpdateProvisoestecnicasDto): Promise<Provisoestecnicas>;
    remove(ProvisaoID: any): Promise<void>;
}
