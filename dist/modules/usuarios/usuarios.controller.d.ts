import { UsuariosService } from './usuarios.service';
import { CreateUsuariosDto } from './dto/create-usuarios.dto';
import { UpdateUsuariosDto } from './dto/update-usuarios.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuariosDto: CreateUsuariosDto): Promise<import("./entities/usuarios.entity").Usuarios>;
    findAll(): Promise<import("./entities/usuarios.entity").Usuarios[]>;
    findOne(id: string): Promise<import("./entities/usuarios.entity").Usuarios>;
    update(id: string, updateUsuariosDto: UpdateUsuariosDto): Promise<import("./entities/usuarios.entity").Usuarios>;
    remove(id: string): Promise<void>;
}
