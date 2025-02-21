import { BaseEntity } from '../../../shared/base.entity';
export declare class Planocontas extends BaseEntity {
    ContaID: number;
    CodigoConta: string;
    NomeConta: string;
    TipoConta: string;
    ContaSUSEP: boolean;
    ContaPaiID: number | null;
    CompanhiaID: number;
}
