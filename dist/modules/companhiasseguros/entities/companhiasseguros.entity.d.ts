import { BaseEntity } from '../../../shared/base.entity';
export declare class Companhiasseguros extends BaseEntity {
    CompanhiaID: number;
    RazaoSocial: string;
    NomeFantasia: string | null;
    CNPJ: string;
    CodigoSUSEP: string | null;
    DataCriacao: Date | null;
    DataAtualizacao: Date | null;
}
