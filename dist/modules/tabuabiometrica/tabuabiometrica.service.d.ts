import { Repository } from 'typeorm';
import { Tabuabiometrica } from './entities/tabuabiometrica.entity';
import { CreateTabuabiometricaDto } from './dto/create-tabuabiometrica.dto';
import { UpdateTabuabiometricaDto } from './dto/update-tabuabiometrica.dto';
export declare class TabuabiometricaService {
    private readonly tabuabiometricaRepository;
    constructor(tabuabiometricaRepository: Repository<Tabuabiometrica>);
    create(createTabuabiometricaDto: CreateTabuabiometricaDto): Promise<Tabuabiometrica>;
    findAll(): Promise<Tabuabiometrica[]>;
    findOne(id: any): Promise<Tabuabiometrica>;
    update(id: any, updateTabuabiometricaDto: UpdateTabuabiometricaDto): Promise<Tabuabiometrica>;
    remove(id: any): Promise<void>;
}
