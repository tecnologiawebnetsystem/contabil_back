import { BaseEntity } from '../../../shared/base.entity';
export declare class Sucursais extends BaseEntity {
    SucursalID: number;
    CompanhiaID: number;
    Nome: string;
    Endereco: string | null;
    Cidade: string | null;
    Estado: string | null;
}
