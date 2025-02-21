import { Repository } from 'typeorm';
import { Usuarios } from './entities/usuarios.entity';
import { CreateUsuariosDto } from './dto/create-usuarios.dto';
import { UpdateUsuariosDto } from './dto/update-usuarios.dto';
export declare class UsuariosService {
    private readonly usuariosRepository;
    constructor(usuariosRepository: Repository<Usuarios>);
    create(createUsuariosDto: CreateUsuariosDto): Promise<Usuarios>;
    findAll(): Promise<Usuarios[]>;
    findOne(UsuarioID: any): Promise<Usuarios>;
    update(UsuarioID: any, updateUsuariosDto: UpdateUsuariosDto): Promise<Usuarios>;
    remove(UsuarioID: any): Promise<void>;
}
