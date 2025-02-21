import { BaseEntity } from '../../../shared/base.entity';
export declare class Usuarios extends BaseEntity {
    UsuarioID: number;
    Email: string;
    Nome: string;
    Sobrenome: string;
    Senha: string;
    Perfil: string;
    CompanhiaID: number | null;
    DataCriacao: Date | null;
    DataAtualizacao: Date | null;
}
