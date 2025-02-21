import { BaseEntity } from '../../../shared/base.entity';
export declare class Contratosresseguro extends BaseEntity {
    ContratoID: number;
    CompanhiaID: number;
    NumeroContrato: string;
    Resseguradora: string;
    TipoContrato: string;
    DataInicio: Date;
    DataFim: Date;
}
