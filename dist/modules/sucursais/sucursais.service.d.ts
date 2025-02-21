import { Repository } from 'typeorm';
import { Sucursais } from './entities/sucursais.entity';
import { CreateSucursaisDto } from './dto/create-sucursais.dto';
import { UpdateSucursaisDto } from './dto/update-sucursais.dto';
export declare class SucursaisService {
    private readonly sucursaisRepository;
    constructor(sucursaisRepository: Repository<Sucursais>);
    create(createSucursaisDto: CreateSucursaisDto): Promise<Sucursais>;
    findAll(): Promise<Sucursais[]>;
    findOne(SucursalID: any): Promise<Sucursais>;
    update(SucursalID: any, updateSucursaisDto: UpdateSucursaisDto): Promise<Sucursais>;
    remove(SucursalID: any): Promise<void>;
}
